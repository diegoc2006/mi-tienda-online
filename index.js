require("dotenv").config();
const express = require("express");
const sequelize = require("./db"); // Importamos la conexión a la base de datos
const cors = require("cors");

// Importar rutas
const productosRoutes = require("./routes/productos");
const usuariosRoutes = require("./routes/usuarios");
const carritoRoutes = require("./routes/carrito");
const authRoutes = require("./routes/auth");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.use("/api/productos", productosRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/carrito", carritoRoutes);
app.use("/api/auth", authRoutes);

// Sincronizar con la base de datos
sequelize.sync()
    .then(() => console.log("✅ Base de datos sincronizada correctamente"))
    .catch(error => console.error("❌ Error al sincronizar la base de datos:", error));

// Servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
