const mongoose = require('mongoose');
const {Schema} = mongoose;

let userAuthSchema = new Schema ({
  username: String,
  passwordHash: String
});

let userAUTH = mongoose.model('userAUTH', userAuthSchema, 'userAUTH');
module.exports = userAUTH;