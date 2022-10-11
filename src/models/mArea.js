import * as DataTypes from "sequelize";
import models from "./models";

const mArea = models.define(
  "area",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "지역 ID",
      primaryKey: true,
    },
    name: {
      type: DataTypes.ENUM,
      values: [
        "서울",
        "부산",
        "대구",
        "인천",
        "광주",
        "대전",
        "울산",
        "세종",
        "경기",
        "강원",
        "충청",
        "전라",
        "제주",
      ],
      allowNull: false,
      comment: "지역명",
      primaryKey: false,
    },
  },
  {
    timestamps: false,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    tableName: "area",
  }
);

export default mArea;
