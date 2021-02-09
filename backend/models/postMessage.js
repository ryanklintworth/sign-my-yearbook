import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
})

const PostMessage = mongoose.model('PostMessage', postSchema);


export default PostMessage;