require('dotenv').config();

module.exports = {
	googleClientID: process.env.DEV_GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.DEV_GOOGLE_CLIENT_SECRET,
	mongoURI: process.env.DEV_MONGO_URI,
	cookieKey: process.env.DEV_COOKIE_KEY
};
