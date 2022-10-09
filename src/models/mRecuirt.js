import * as DataTypes from "sequelize";
import models from "./models";
import mCompany from "./mCompany";
import mCountry from "./mCountry";
import mArea from "./mArea";

const mRecuirt = models.define(
  "recuirt",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "지원 ID",
      primaryKey: true,
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "회사 ID",
      primaryKey: false,
    },
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "국가 ID",
      primaryKey: false,
    },
    area_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "지역 ID",
      primaryKey: false,
    },
    position: {
      type: DataTypes.ENUM,
      values: ["BACKEND", "FRONTEND", "DESIGNER", "PLANNER"],
      allowNull: false,
      comment: "지원포지션",
      primaryKey: false,
    },
    compensation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "채용보상금",
      primaryKey: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "채용내용",
      primaryKey: false,
    },
    skill: {
      type: DataTypes.ENUM,
      values: ["PYTHON", "NODE"],
      allowNull: false,
      comment: "사용기술",
      primaryKey: false,
    },
  },
  {
    timestamps: false,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    tableName: "recuirt",
  }
);

mRecuirt.associate = () => {
  mRecuirt.belongsTo(mCompany, "company_id");
  mRecuirt.belongsTo(mCountry, "country_id");
  mRecuirt.belongsTo(mArea, "area_id");
};

export default mRecuirt;
