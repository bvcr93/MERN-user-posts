const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});


//The ref option in a Mongoose schema is used to 
//create a relationship between different models. 
//It tells Mongoose which model the ObjectId references. 
//In the context of your code, ref: 'Post' indicates that
// the posts field in the userSchema contains ObjectId 
//references to documents in the Post model.


const User = mongoose.model('User', userSchema);

module.exports = User;
