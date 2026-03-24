const { Product } = require('../models');

// Registrar un nuevo producto
exports.create = async (req, res) => {
    try {
        const nuevoProducto = await Pago.create(req.body);
        res.status(201).json({
            message: "Producto añadido con éxito",
            data: nuevoProducto
        });
    } catch (error) {
        res.status(500).json({ message: "Error al crear producto", error: error.message });
    }
};

// Listar todos los productos
exports.findAll = async (req, res) => {
    try {
        const product = await product.findAll();
        res.status(200).json(pagos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};