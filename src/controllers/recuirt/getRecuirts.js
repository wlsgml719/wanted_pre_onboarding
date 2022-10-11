import recuirtService from "../../services/recuirtService";

export const request = {
  path: "/recuirt/getRecuirts",
  method: "get",
};

export const execute = async () => {
  try {
    const result = await recuirtService.getRecuirts();
    return result;
  } catch (e) {
    throw e;
  }
};

export default execute;
