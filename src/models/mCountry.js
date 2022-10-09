import * as DataTypes from "sequelize";
import models from "./models";

const mCountry = models.define(
  "country",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "국가 ID",
      primaryKey: true,
    },
    name: {
      type: DataTypes.ENUM,
      values: ["한국"],
      allowNull: false,
      comment: "국가명",
      primaryKey: false,
    },
  },
  {
    timestamps: false,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    tableName: "country",
  }
);

export default mCountry;
