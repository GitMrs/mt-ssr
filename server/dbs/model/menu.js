import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const muneModel = new Schema({
  menu: {
    require: true,
    type: Array,
  }
})
export default mongoose.model('Menu', muneModel)
