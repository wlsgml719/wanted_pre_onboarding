import mCompany from "../models/mCompany";

export const postCompany = async (data) => {
  try {
    const { name, country, area } = data;
    const company = await mCompany.create({
      name: name,
      country: country,
      area: area,
    });

    return JSON.stringify(company.dataValues);
  } catch (e) {
    throw { message: e.message, data };
  }
};

export default { postCompany };
