const express = require('express');
const router = express.Router();

let Productos = require('../../models/productos');

router.get('/', async (req, res) => {
		Productos.aggregate([
			$group: {
				_id: "$invenID",
			}
		])
});

module.exports = router;