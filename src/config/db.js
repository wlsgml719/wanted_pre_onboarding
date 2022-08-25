const config = require('./config');

module.exports = {
  app: config.app,
  dialect: config.db_dialect || 'mysql',
  read_host:
    config.db_read_host || '127.0.0.1',
  host: config.db_host || '127.0.0.1',
  port: config.db_port || '3306',
  user: config.db_user || 'root',
  password: config.db_pass || 'mkjsH22887!',
  database: config.db_name || 'wanted',
  connectionLimit: 20,
  waitForConnections: false
};
