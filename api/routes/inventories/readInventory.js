const express = require('express');
const router = express.Router();
let inventorie = require('../../models/inventories');

router.get('/', async (req, res, next) => {
	const inventarios = await inventorie.find({'lang': req.query.lang});
	res.json(inventarios);
});

module.exports = router;
