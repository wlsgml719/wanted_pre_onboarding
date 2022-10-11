import mCompany from "../models/mCompany";

export const postCompany = async (data) => {
  try {
    const { name, country, area } = data;
    const result = await mCompany.create({
      name: name,
      country: country,
      area: area,
    });

    return result.dataValues;
  } catch (e) {
    throw { message: e.message, data };
  }
};

export default { postCompany };
