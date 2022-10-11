import recuirtService from "../../services/recuirtService";

export const request = {
  path: "/recuirt/getRecuirt",
  method: "get",
};

export const execute = async ({ query }) => {
  const result = await recuirtService.getRecuirt(query.id);
  return result;
};

export default execute;
