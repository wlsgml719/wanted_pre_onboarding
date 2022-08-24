import { Sequelize } from 'sequelize';
import config from '../config';

const args = {};

args.user = config.user;
args.password = config.password;
args.options = {
    host: config.host,
    dialect: config.dialect,
    timezone: '+09:00',
};

const models = new Sequelize(config.database, args.user, args.password, args.options);
export default models;