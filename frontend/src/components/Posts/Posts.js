import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    <Grid className={classes.container} container alignItems="stretch" spacing={2}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={3}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;