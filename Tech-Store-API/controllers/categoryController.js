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

let getcategoryId = async (request, response) => {
    try {

        const id = request.params.id;
        let categories = await product.findByPk(id);

        if (!categories) {
            return response.status(404).json({
                status: 404,
                message: "Category no encontrada"
            });
        }

        response.status(200).json({
            status: 200,
            data: categories
        });

    } catch (error) {

        response.status(500).json({
            status: 500,
            message: error.message
        });

    }
};

module.exports = {
    getcategoryId,
    
};