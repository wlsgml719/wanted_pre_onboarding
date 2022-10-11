import recuirtService from "../../services/recuirtService";

export const request = {
  path: "/recuirt/getRecuirts",
  method: "get",
};

export const execute = async () => {
  const result = await recuirtService.getRecuirts();
  return result;
};

export default execute;
