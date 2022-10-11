import e from "express";
import mCompany from "../models/mCompany";
import mRecuirt from "../models/mRecuirt";

export const getRecuirts = async () => {
  try {
    const result = await mRecuirt.findAll({ include: mCompany });
    return JSON.stringify(result);
  } catch (e) {
    throw e;
  }
};

export const postRecuirt = async ({ company_id, ...data }) => {
  try {
    const company = await mCompany.findOne({ where: { id: company_id } });
    if (!company)
      throw { status: 400, message: "존재하지않는 회사입니다.", data };

    const { position, compensation, content, skill } = data;

    const result = await mRecuirt.create({
      company_id,
      position,
      compensation,
      content,
      skill,
    });

    return result.dataValues;
  } catch (e) {
    throw { message: e.message, data };
  }
};

export default { getRecuirts, postRecuirt };
