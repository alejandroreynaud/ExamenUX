require("dotenv").config();

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_DIALECT
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME || "postgres",
    password: DB_PASSWORD || "Alo200515",
    database: DB_NAME || "techstore_db",
    host: DB_HOST || "127.0.0.1",
    dialect: DB_DIALECT || "postgres"
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "techstore_test",
    host: DB_HOST,
    dialect: "postgres"
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres"
  }
};