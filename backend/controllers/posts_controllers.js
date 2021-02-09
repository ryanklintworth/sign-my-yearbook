import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    //- https://http.cat/200
    res.status(200).json(postMessages);
  } catch (error) {
    //- https://http.cat/404
    res.status(404).json({ message: error.message })
  }
}

export const createPost = async (req, res) => {
  const post = req.body
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    //- https://http.cat/201
    res.status(201).json(newPost);
  } catch (error) {
    //- https://http.cat/409
    res.status(409).json({ message: error.message });
  }
}