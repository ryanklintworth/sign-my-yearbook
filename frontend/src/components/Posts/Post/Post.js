import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts'

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} />
      <div className={classes.overlay}>
        <Typography style={{color: 'white'}} variant="h6">{post.creator}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="default"/>
        </Button>
      </div>
      <div className={classes.details}>
        <CardContent>
          <Typography variant="h6" color="textSecondary" gutterBottom>{post.message}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="inherit" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteForeverIcon fontSize="small" />
          </Button>
        </CardActions>
      </div>
    </Card>
  )
}

export default Post;