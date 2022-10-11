import recuirtService from "../../services/recuirtService";

export const request = {
  path: "/recuirt/postRecuirt",
  method: "post",
};

export const execute = async ({ body }) => {
  const result = await recuirtService.postRecuirt({ body });
  return result;
};

export default execute;
