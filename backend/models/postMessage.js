import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  creator: String,
  message: String,
  selectedFile: String,
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;