import * as DataTypes from "sequelize";
import models from "./models";
import mUser from "./mUser";
import mApply from "./mApply";

const mRecuirt = models.define(
  "recuirt",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      comment: "지원 ID",
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      comment: "생성일",
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "회사 ID",
    },
    country: {
      type: DataTypes.ENUM,
      values: ["한국", "미국", "중국"],
      allowNull: false,
      comment: "국가명",
    },
    area: {
      type: DataTypes.ENUM,
      values: ["서울", "부산", "대구"],
      allowNull: false,
      comment: "지역명",
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "지원포지션",
    },
    compensation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "채용보상금",
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "채용내용",
    },
    skill: {
      type: DataTypes.ENUM,
      values: ["PYTHON", "NODE"],
      allowNull: false,
      comment: "사용기술",
    },
  },
  {
    timestamps: false,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    tableName: "recuirt",
  }
);

mRecuirt.belongsToMany(mUser, {
  through: mApply,
  as: "users",
  foreignKey: "recuirt_id",
  otherKey: "user_id",
});

mUser.belongsToMany(mRecuirt, {
  through: mApply,
  as: "applys",
  foreignKey: "user_id",
  otherKey: "recuirt_id",
});

export default mRecuirt;
