require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

console.log('Connection URL:', process.env.JAWSDB_URL);
console.log('Local DB Name:', process.env.DB_NAME);
console.log('Local DB User:', process.env.DB_USER);
console.log('Local DB Password:', process.env.DB_PASSWORD);

module.exports = sequelize;
