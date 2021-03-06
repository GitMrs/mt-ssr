import mongoose from 'mongoose';
let Schema = mongoose.Schema;
const cartModel = new Schema({
  id: {
    type:String,
    require:true
  },
  detail:{
    type:Array,
    require:true
  },
  cartNo:{
    type:String,
    require:true
  },
  user:{
    type:String,
    require:true
  },
  time:{
    type:String,
    require:true
  }
})
export default mongoose.model('Cart',cartModel);