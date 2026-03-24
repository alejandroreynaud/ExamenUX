const { Product } = require('../models');

const crearProducto = async (req, res) => {
    try {
        const nuevoProducto = await Product.create(req.body);
        res.status(201).json({
            message: "Producto añadido con éxito",
            data: nuevoProducto
        });
    } catch (error) {
        res.status(500).json({ 
            message: "Error al crear producto", 
            error: error.message 
        });
    }
};

let listarProductos = async (req, res) => {
    try {
        const productos = await Product.findAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ 
            message: "Error al obtener productos",
            error: error.message 
        });
    }
};

module.exports = {
    crearProducto,
    listarProductos
};