import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username:{
    require:true,
    type:String,
    unique:true
  },
  password:{
    require:true,
    type:String
  },
  email:{
    require:true,
    type:String
  }
})
export default mongoose.model('User', UserSchema)