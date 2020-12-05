const express = require('express');
const router = express.Router();
const jwt = require('../../config/configJWT');

let Productos = require('../../models/productos');

router.get('/', jwt.checkJWT,  async (req, res) => {
	Productos.aggregate([
		{
			$group: {
				_id: "$invenID",
				sumTotal: {
					$sum: {
						$multiply: ["$cantindad", "$precio"]
					}
				}
			}
		}
	], (err, result) => {
			if(err) res.status(400);
			res.json(result);	
		}
	);
});

module.exports = router;
