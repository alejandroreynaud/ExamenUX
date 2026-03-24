const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const categoryRouter = require('./routes/categories');
const productRouter = require('./routes/products');
const swaggerSetup = require('./config/swagger'); 

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/categorys', categoryRouter);
app.use('/products', productRouter);

swaggerSetup(app);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API Municipalidad Corriendo');
});

// 5. EXPORTAR APP
module.exports = app;