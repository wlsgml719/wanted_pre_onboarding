import recuirtService from "../../services/recuirtService";

export const request = {
  path: "/recuirt/putRecuirt",
  method: "put",
};

export const execute = async ({ query, body }) => {
  const result = await recuirtService.putRecuirt(query.id, body);
  return result;
};

export default execute;
