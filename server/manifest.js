require('dotenv').config();

// These variables need to be inserted into your .env before running a project
module.exports = {
  environment: {
    env: process.env.NODE_ENVIRONMENT || 'development',
    port: process.env.PORT || 8080,
  },
  cloudSqlProxy: {
    dbUser: process.env.DBUSER,
    dbHost: process.env.DBHOST,
    dbPass: process.env.DBPASS,
    dbPort: process.env.DBPORT,
    dbName: process.env.DBNAME,
  },
};
