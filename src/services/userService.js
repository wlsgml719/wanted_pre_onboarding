import mRecuirt from "../models/mRecuirt";
import mUser from "../models/mUser";
import mUserRecuirts from "../models/mApply";

export const postUser = async (data) => {
  try {
    const result = mUser.create(data);
    return result;
  } catch (e) {
    throw e;
  }
};

export const postApply = async ({ user_id, recuirt_id }) => {
  try {
    const user = await mUser.findOne({ where: { id: user_id } });
    const recuirt = await mRecuirt.findOne({ where: { id: recuirt_id } });

    if (!user || !recuirt)
      throw { status: 400, message: "존재하지않는 정보입니다." };

    const apply = await mUserRecuirts.create({ user_id, recuirt_id });
    return apply;
  } catch (e) {
    throw e;
  }
};

export const getUserApply = async (id) => {
  try {
    const result = await mUser.findAll({
      where: { id },
      include: { model: mRecuirt, as: "applys" },
    });

    return result;
  } catch (e) {
    throw e;
  }
};

export default { postUser, postApply, getUserApply };
