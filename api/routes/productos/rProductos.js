const express = require('express');
const router = express.Router();
let Productos = require('../../models/productos');

router.get('/', async (req, res, next) => {
	const productos = await Productos.find(
		{'invenID': req.query.invenID},
		{'lang': req.query.lang}
	);
	
	res.json(productos);
});

module.exports = router;
