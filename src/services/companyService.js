import mCompany from "../models/mCompany";

export const postCompany = async (data) => {
  try {
    const { name, country, area } = data;
    // +a 하나의 회사에 여러 지역/ 여러 국가 등록 가능하도록 수정
    const result = await mCompany.create({
      name: name,
      country: country,
      area: area,
    });

    return result.dataValues;
    // + created_at fotmmating
  } catch (e) {
    throw { message: e.message, data };
  }
};

export default { postCompany };
