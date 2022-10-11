import { or, Op, fn } from "sequelize";
import mCompany from "../models/mCompany";
import mRecuirt from "../models/mRecuirt";

export const getRecuirt = async (id) => {
  try {
    const result = await mRecuirt.findOne({
      where: { id },
      include: [
        {
          model: mCompany,
          require: true,
          include: [
            {
              model: mRecuirt,
              as: "recuirts",
              where: { id: { [Op.ne]: id } },
            },
          ],
        },
      ],
    });
    return result;
  } catch (e) {
    throw e;
  }
};

export const getRecuirts = async (offset = 1, limit = 10) => {
  try {
    const result = await mRecuirt.findAll({
      include: mCompany,
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
    return result;
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

    return result;
  } catch (e) {
    throw { message: e.message, data };
  }
};

export const putRecuirt = async (id, data) => {
  try {
    const recuirt = await mRecuirt.findOne({ where: { id } });

    if (!recuirt)
      throw { status: 400, message: "존재하지않는 채용공고 입니다." };

    const { position, compensation, content, skill } = data;

    recuirt.position = position;
    recuirt.compensation = compensation;
    recuirt.content = content;
    recuirt.skill = skill;

    return recuirt.save();
  } catch (e) {
    throw { message: e.message, data };
  }
};

export const deleteRecuirt = async (id) => {
  try {
    const recuirt = await mRecuirt.findOne({ where: { id } });
    if (!recuirt)
      throw { status: 400, message: "존재하지않는 채용공고입니다." };

    return recuirt.destroy();
  } catch (e) {
    throw e;
  }
};

export const searchRecuirts = async (search, offset = 1, limit = 10) => {
  try {
    const result = await mRecuirt.findAll({
      where: {
        [Op.or]: [
          {
            position: { [Op.like]: search },
          },
          {
            skill: search,
          },
        ],
      },
      offset: parseInt(offset),
      limit: parseInt(limit),
    });
    return result;
  } catch (e) {
    throw e;
  }
};

export default {
  getRecuirt,
  getRecuirts,
  postRecuirt,
  putRecuirt,
  deleteRecuirt,
  searchRecuirts,
};
