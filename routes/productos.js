const express = require("express");
const router = express.Router();
const authMiddleware = require("../routes/middlewares/authMiddleware");

// Almacenamiento en memoria para productos
let productos = [
    { id: 1, nombre: "Producto 1", descripcion: "Descripción 1", precio: 100 },
    { id: 2, nombre: "Producto 2", descripcion: "Descripción 2", precio: 200 }
];

// Obtener todos los productos (sin requerir autenticación para leer, opcional)
router.get("/", (req, res) => {
    res.json(productos);
});

// Crear un producto (requiere autenticación)
router.post("/", authMiddleware, (req, res) => {
    const { nombre, descripcion, precio } = req.body;
    if (!nombre || !descripcion || !precio) {
        return res.status(400).json({ error: "Faltan datos" });
    }
    const nuevoProducto = { id: productos.length + 1, nombre, descripcion, precio };
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

// (Opcional) Puedes agregar rutas para actualizar y eliminar productos

module.exports = router;
