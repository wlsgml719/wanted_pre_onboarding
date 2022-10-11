import mCompany from "../models/mCompany";
import mRecuirt from "../models/mRecuirt";

export const getRecuirts = async () => {
  try {
    const result = await mRecuirt.findAll({ include: mCompany });
    return JSON.stringify(result);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const postRecuirt = async ({ body }) => {
  try {
    const result = await mRecuirt.create(body);
    return JSON.stringify(result);
  } catch (e) {
    // SequelizeValidationError
    // SequelizeForeignKeyConstraintError
    throw e;
  }
};

export default { getRecuirts, postRecuirt };
