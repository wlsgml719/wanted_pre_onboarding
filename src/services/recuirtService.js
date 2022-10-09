import mRecuirt from "../models/mRecuirt";

export const getRecuirts = async (req, res) => {
  try {
    const result = await mRecuirt.findAll();
    return result;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default { getRecuirts };
