const { Category } = require('../models');

exports.create = async (req, res) => {
    try {
        const nuevoCategory = await Impuesto.create(req.body);
        res.status(201).json({ message: "Nueva Category", data: nuevoCategory });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const impuestos = await Impuesto.findAll();
        res.status(200).json(impuestos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};