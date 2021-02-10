import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'

const router = express.Router()

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

export const updatePost = async (req, res) => {
  const { id: _id } = req.params; 
  const post = req.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) 
  return res.status(404).send('No posts with that id');

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });

  res.json(updatedPost);
}