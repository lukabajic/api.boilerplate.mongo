require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  jwtSecret: process.env.JWT_SECRET,
  site: process.env.SITE,
};
