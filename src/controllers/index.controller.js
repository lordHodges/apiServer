const db = require("../models");
const Factura = db.facturas;
const Op = db.Sequelize.Op;

//los metodos son definidos por el ORM Sequelizer

//insertar
exports.create = (req, res) => {
  console.log(req.body);

  const factura = {
    rut_empresa: req.body.rut_empresa,
    numero_factura: req.body.numero_factura,

    valor_iva: req.body.valor_iva,
    valor_neto: req.body.valor_neto,
    valor_total: req.body.valor_total,
  };

  Factura.create(factura)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(300).send({
        message: "error desconocido al insertar en BD",
      });
    });
};
//listar
exports.findAll = (req, res) => {
  Factura.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error desconocido al consultar datos.",
      });
    });
};
