const mongoose = require('mongoose');
const {Schema} = mongoose;

let productoSchema = new Schema({
  name: String,
  cantindad: String,
	caducidad: String,
	precio: String,
  invenID: String,
});

let producto = mongoose.model('Productos', productoSchema, 'Productos')
module.exports = producto;