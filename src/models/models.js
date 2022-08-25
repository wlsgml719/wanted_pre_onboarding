import { Sequelize } from 'sequelize';
import db_config from '../config/db';

const args = {};

args.user = db_config.user;
args.password = db_config.password;
args.options = {
    host: '127.0.0.1',
    dialect: 'mysql',
    timezone: '+09:00',
};

const models = new Sequelize(db_config.database, args.user, args.password, args.options);
export default models;