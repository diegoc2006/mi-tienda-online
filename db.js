require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    }
);

sequelize.authenticate()
    .then(() => console.log("✅ Conexión a la base de datos exitosa"))
    .catch((error) => console.error("❌ Error al conectar la base de datos:", error));

module.exports = sequelize;
