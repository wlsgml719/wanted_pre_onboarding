import fs from "fs";
import express from "express";

export const getRoute = async () => {
  const router = express.Router();

  router.all("/*", function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "GET, PUT, POST, DELETE, HEAD, OPTIONS"
    );
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    next();
  });

  const loadFiles = [];
  const loadPath = async (path, subPath) => {
    const files = await fs.readdirSync(path + subPath, { withFileTypes: true });

    for (const file of files) {
      if (file.isDirectory()) {
        await loadPath(path, subPath + "/" + file.name);
      } else if (file.name.match(/\.js$/) !== null) {
        const exec = require("./controllers" + subPath + "/" + file.name);

        loadFiles.push({
          subPath,
          file,
          exec: exec,
          size: Object.keys(exec.params?.path || {}).length || 0,
        });
      }
    }
  };

  await loadPath(__dirname + "/controllers", "");

  for (const obj of loadFiles) {
    const { exec, subPath, file } = obj;

    let pageName = "/" + file.name.substring(0, file.name.length - 3);
    if (pageName === "/index") pageName = "";

    const path = exec.request?.path || subPath + pageName;
    const method = exec.request?.method || "get";
    const params = exec.params || {};

    const route_uri = path.replace(/\{([a-zA-Z0-9\_]+)\}/g, ":$1");

    router[method](route_uri, async (req, res, next) => {
      if (!exec.execute) {
        res.status(404).json({});
      } else {
        try {
          const args = {
            params: {
              ...req.params,
              ...req.body,
              ...req.query,
            },
            files: req.files,
            body: req.body,
            query: req.query,
            path: req.params,
            user: req.user,
          };

          if (exec.execute.length >= 3) {
            return await exec.execute(req, res, next, { params });
          } else {
            const output = await exec.execute(args);
            res.status(200).json(output);
          }
        } catch (e) {
          if (e?.status === 301) {
            res.redirect(301, e.location);
          } else if (e?.status) {
            res.status(e?.status).json({ message: e?.message, data: e?.data });
          } else {
            res.status(e?.status || 500).json({
              uri: route_uri,
              message: e?.message,
              data: e?.data || JSON.stringify(e),
            });
          }
        }
      }
    });
  }

  return router;
};

export default getRoute;
