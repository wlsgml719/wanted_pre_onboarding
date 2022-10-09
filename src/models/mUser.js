import models from "./models";

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
  },
  {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    tableName: "user",
  }
);

export default mUser;
