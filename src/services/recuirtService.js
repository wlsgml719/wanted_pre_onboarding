import { Op, literal } from "sequelize";
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

export const getRecuirts = async (offset = 0, limit = 9) => {
  try {
    const result = await mRecuirt.findAll({
      attributes: {
        include: [
          [
            literal(
              `(SELECT
              c.name
            FROM
              company c
            WHERE
              c.id = recuirt.company_id
            )`
            ),
            "name",
          ],
        ],
        exclude: ["content"],
      },
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

    const { country, area, position, compensation, content, skill } = data;

    const result = await mRecuirt.create({
      country,
      area,
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
      throw { status: 400, message: "존재하지않는 채용공고입니다." };

    for (let key of Object.keys(data)) {
      recuirt[key] = data[key];
    }

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

export const searchRecuirts = async (search, offset = 0, limit = 9) => {
  try {
    const result = await mRecuirt.findAll({
      attributes: {
        exclude: ["content"],
      },
      include: {
        model: mCompany,
      },
      where: {
        [Op.or]: [
          {
            skill: search,
          },
          literal(`\`company\`.\`name\` LIKE '%${search}%'`),
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
