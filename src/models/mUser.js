import * as DataTypes from "sequelize";
import models from "./models";
import mRecuirt from "./mRecuirt";
import mApply from "./mApply";

const mUser = models.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      comment: "유저 ID",
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      comment: "유저명",
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
    tableName: "user",
  }
);

// mUser.belongsToMany(mRecuirt, {
//   through: mApply,
//   foreignKey: "user_id",
//   otherKey: "recuirt_id",
// });

export default mUser;
