import mCompany from "../models/mCompany";

export const postCompany = async (data) => {
  try {
    const { name } = data;
    const result = await mCompany.create({
      name: name,
    });

    return result.dataValues;
  } catch (e) {
    throw e;
  }
};

export default { postCompany };
