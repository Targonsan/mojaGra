var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var rejestrationSchema = new Schema({
  login:  {type: String, required: true}, //to znaczy ze jest obowiazkowe podanie tytułu !
  password:  {type: String, required: true},
  email:  {type: String, required: true},
  created: { type: Date, default: Date.now },
 
})

module.exports=mongoose.model('Rejestred',rejestrationSchema)