const dbConf = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "nanco2121",
  DB: "ng_finanzas_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = dbConf;
