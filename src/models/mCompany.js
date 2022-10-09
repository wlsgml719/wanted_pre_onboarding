import * as DataTypes from "sequelize";
import models from "./models";
import mRecuirt from "./mRecuirt";

const mCompany = models.define(
  "company",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "회사 ID",
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "회사명",
      primaryKey: false,
    },
  },
  {
    timestamps: false,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    tableName: "company",
  }
);

export default mCompany;
