import recuirtService from "../../services/recuirtService";

export const request = {
  path: "/recuirt/deleteRecuirt",
  method: "delete",
};

export const execute = async ({ query }) => {
  const result = await recuirtService.deleteRecuirt(query.id);
  return result;
};

export default execute;
