const API_PATH = process.env.API_PATH || '/api/';
const APP_PORT = process.env.PORT || 8443;

const CONSUMER_SECRET = process.env.MEDIAWIKI_CONSUMER_SECRET;
const CONSUMER_KEY = process.env.MEDIAWIKI_CONSUMER_KEY;
const BASE_URL = 'https://en.wikipedia.org/';

const USE_HTTPS = Boolean( process.env.USE_HTTPS );

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV_MODE = NODE_ENV !== 'production';

const AUTH_SCOPE = 'profile'

module.exports = { API_PATH, IS_DEV_MODE,
	CONSUMER_SECRET, CONSUMER_KEY, USE_HTTPS, APP_PORT, AUTH_SCOPE, BASE_URL
};