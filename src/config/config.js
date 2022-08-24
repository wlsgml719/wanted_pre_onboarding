const CONFIG = {};

CONFIG.app = process.env.NODE_ENV
CONFIG.port = process.env.PORT || '3900';

CONFIG.scheme = process.env.SCHEME || 'http';
CONFIG.host = process.env.HOST || 'localhost:3900';

CONFIG.db_dialect = process.env.DB_DIALECT;
CONFIG.db_host = process.env.DB_HOST;
CONFIG.db_read_host = process.env.DB_READ_HOST;
CONFIG.db_port = process.env.DB_PORT;
CONFIG.db_name = process.env.DB_NAME;
CONFIG.db_user = process.env.DB_USER;
CONFIG.db_pass = process.env.DB_PASS;

module.exports = CONFIG;
