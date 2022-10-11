import express from "express";
import getRoute from "./route";
import models from "./models/models";

const appRun = async () => {
  const app = express();
  const route = await getRoute();

  app.use(express.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    res.type("text/plain");
    res.status(200);
    res.send("Index");
  });

  app.use("/v1", route);

  app.use("/sync", async (req, res) => {
    try {
      await models.sync({ alter: true });
      res.type("text/plain");
      res.status(200);
      res.send("db-sync");
    } catch (e) {
      throw e;
    }
  });

  return app;
};

export default appRun;
