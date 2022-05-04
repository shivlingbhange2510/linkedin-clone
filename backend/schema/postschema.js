var mongoose = require('mongoose');
  
var imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img: String
    // img:
    // {
    //     data: Buffer,
    //     contentType: String
    // }
});
  
module.exports = new mongoose.model('post', imageSchema);