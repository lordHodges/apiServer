module.exports = (app) => {
  const indexCtrl = require("../controllers/index.controller");

  var router = require("express").Router();

  router.post("/", indexCtrl.create);
  router.get("/", indexCtrl.findAll);

  app.use("/api/index", router);
};

/* const express = require("express");
const indexCtrl = require("../controllers/index.controller");
const router = express.Router();

router.get("/", indexCtrl.findAll);
router.post("/", indexCtrl.create);

module.exports = router;
 */
