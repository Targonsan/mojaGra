var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
  title:  {type: String, required: [true, 'pole tytuł jest wymagane']}, //to znaczy ze jest obowiazkowe podanie tytułu !
  description:  {type: String, required: [true, 'pole opis jest wymagane']},
  created: { type: Date, default: Date.now },
 
})

module.exports=mongoose.model('News',newsSchema)