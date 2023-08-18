require('dotenv').config();

module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	mongoURI: process.env.DEV_MONGO_URI,
	cookieKey: process.env.DEV_COOKIE_KEY,
	redisUrl: 'redis://127.0.0.1:6379'
};
