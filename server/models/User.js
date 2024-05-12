const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  personalID: mongoose.Schema.ObjectId, 
  storeID: mongoose.Schema.ObjectId, 
  firstname: String,
  lastname: String,
  phonenumber: Number,
  email: String,
  password: String,
  userType: String,
  secretKey: String,
  avatar: String,
  address: String
}, 
{
 modified_at:{type:Number,default:()=>Date.now()}
}
);

const User = mongoose.model('User', userSchema);

module.exports = User;

