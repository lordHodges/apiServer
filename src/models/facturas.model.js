const db = require("./index");
("use strict");
module.exports = (sequelize, DataTypes) => {
  const Facturas = sequelize.define("ng_facturas_compras", {
    numero_factura: { type: DataTypes.STRING },
    rut_empresa: { type: DataTypes.STRING },
    valor_iva: { type: DataTypes.INTEGER },
    valor_neto: { type: DataTypes.INTEGER },
    valor_total: { type: DataTypes.INTEGER },
  });
  return Facturas;
};
