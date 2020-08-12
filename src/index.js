const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

//import mis config.
const db = require("./models");
/* const configDB = require("./database");
const conexion = require("./helpers/conexion");
const consulta = require("./helpers/consultas"); */

//routes

//init
const app = express();

//set
app.set("port", process.envPORT || 3000);
var corsConfig = { origin: "*" };

//uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors(corsConfig));

//middlewares

//rutas
require("./routes/index.routes")(app);
db.sequelize.sync();
//test

//start aplication
app.listen(app.get("port"), () => {
  console.log("Server is on port", app.get("port"));
});

//Run app, then load http://localhost:port in a browser to see the output.
