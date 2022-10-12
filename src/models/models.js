import { Sequelize } from "sequelize";

const models = new Sequelize({
  dialect: "sqlite",
  storage: "../database/wanted.db",
});

export default models;
