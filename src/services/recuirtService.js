import mCompany from "../models/mCompany";
import mRecuirt from "../models/mRecuirt";

export const getRecuirts = async (req, res) => {
  try {
    const result = await mRecuirt.findAll({ include: mCompany });

    console.log(JSON.stringify(result));
    return result;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export default { getRecuirts };
