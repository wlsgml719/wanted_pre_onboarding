import * as DataTypes from "sequelize";
import models from "./models";

const mUserRecuirts = models.define(
  "userRecuirts",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      comment: "유저 ID",
    },
    recuirt_id: {
      type: DataTypes.INTEGER,
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
  },
  {
    timestamps: false,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    tableName: "userRecuirts",
  }
);

export default mUserRecuirts;
