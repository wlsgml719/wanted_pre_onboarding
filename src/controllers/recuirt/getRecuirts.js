import recuirtService from "../../services/recuirtService";

export const execute = async (req, res) => {
  try {
    const result = await recuirtService.getRecuirts(req, res);
    return result;
  } catch (e) {
    throw e;
  }
};

export default execute;
