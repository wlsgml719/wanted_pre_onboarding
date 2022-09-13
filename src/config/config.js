const CONFIG = {};

CONFIG.app = process.env.NODE_ENV || 'development';
CONFIG.app_name = 'wanted_onboarding';
CONFIG.port = process.env.PORT || '3900';

CONFIG.scheme = process.env.SCHEME || 'http';
CONFIG.host = process.env.HOST || 'localhost:3900';

module.exports = CONFIG;