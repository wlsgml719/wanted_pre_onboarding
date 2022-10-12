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
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      comment: "생성일",
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      comment: "회사명",
    },
  },
  {
    timestamps: false,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    tableName: "company",
  }
);

mCompany.hasMany(mRecuirt, {
  sourceKey: "id",
  foreignKey: "company_id",
  as: "recuirts",
});
mRecuirt.belongsTo(mCompany, { foreignKey: "company_id" });

export default mCompany;
