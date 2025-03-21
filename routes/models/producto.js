const { DataTypes } = require("sequelize");
const sequelize = require("../../db"); // Ajusta la ruta si es necesario

const Producto = sequelize.define("Producto", {
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.STRING, allowNull: false },
    precio: { type: DataTypes.FLOAT, allowNull: false },
});

module.exports = Producto;
