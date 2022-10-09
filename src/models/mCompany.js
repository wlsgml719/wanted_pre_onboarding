import * as DataTypes from "sequelize";
import models from "./models";
import mRecuirt from "./mRecuirt";

const mCompany = models.define(
  "company",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      comment: "회사 ID",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "회사명",
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
  },
  {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    tableName: "company",
  }
);

mCompany.hasMany(mRecuirt, { sourceKey: "id", foreignKey: "company_id" });
mRecuirt.belongsTo(mCompany);

export default mCompany;
