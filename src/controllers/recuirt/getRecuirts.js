import recuirtService from "../../services/recuirtService";

export const request = {
  path: "/recuirt/getRecuirts",
  method: "get",
};

export const execute = async ({ query }) => {
  try {
    const result = await recuirtService.getRecuirts(
      query?.offset,
      query?.limit
    );
    return result;
  } catch (e) {
    throw e;
  }
};

export default execute;
