import * as DataTypes from "sequelize";
import models from "./models";
import mRecuirt from "./mRecuirt";
import mUserRecuirts from "./mUserRecuirts";

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
//   through: mUserRecuirts,
//   foreignKey: "user_id",
//   otherKey: "recuirt_id",
// });

export default mUser;
