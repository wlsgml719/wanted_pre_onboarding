import * as DataTypes from "sequelize";
import models from "./models";

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

export default mRecuirt;
