  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var UserSchema = new Schema({
    author:  {type: String, required: true},//powinna tu byc nazwa uzytkownika
    villageTitle: { type: String, default:'wioska'}, //nazwa wioski 
    coOrdinates:{
      x:{type: Number, default:100},
      y:{type: Number, default:100},
    },
    resources:{
      gold:{type: Number, default:100},
      wood:{type: Number, default:100},
      stone:{type: Number, default:100}
    },
    buildings:{
      townHall:{type:Number,default:0},
      barrack:{type:Number,default:0},
      goldMine:{type:Number,default:1},
      stoneMine:{type:Number,default:1},
      sawmill:{type:Number,default:1},
    },
    army:{
      armed:{type:Number,default:0},
      pikeman:{type:Number,default:0},
      Axeman:{type:Number,default:0},
      cavalry:{type:Number,default:0},
      heavyCavalry:{type:Number,default:0},
    },
    created: { type: Date, default: Date.now },
  });

  module.exports=mongoose.model('User',UserSchema)