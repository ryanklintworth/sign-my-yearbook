import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';



const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: '',
    message: '',
    selectedFile: '' 
  })
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', message: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
      <Typography variant="h6">Sign My Yearbook</Typography>
      <TextField 
        name="creator" 
        variant="outlined"
        label="Student Name"  
        fullWidth
        value={postData.creator} 
        onChange={(event) => setPostData({ ...postData, creator: event.target.value })}
       />
      <TextField 
        name="message" 
        variant="outlined"
        label="Sign My Yearbook" 
        fullWidth
        multiline rows={4}
        value={postData.message}
        onChange={(event) => setPostData({ ...postData, message: event.target.value })}
       />
      <div className={classes.fileInput}>
        <FileBase
          type="file"
          multiple={false}
          onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
        />
      </div>
      <Button 
        className={classes.buttonSubmit}
        variant="outlined"
        color="primary"
        size="large"
        type="submit"
        fullWidth>
          SUBMIT
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        size="large"
        onClick={clear}
        fullWidth>
        CLEAR
      </Button>
      </form>
    </Paper>
  )
}

export default Form;