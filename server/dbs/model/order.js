import mongoose from 'mongoose';
let Schema = mongoose.Schema;
let orderSchema = new Schema({
  id:{
    type:String,
    require:true
  },
  count:{
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
  },
  total:{
    type:String,
    require:true
  },
  imgs:{
    type:Array,
    require:true
  },
  name:{
    type:String,
    require:true
  },  
  status:{
    type:String,
    require:true
  },
});
export default mongoose.model('Order',orderSchema)