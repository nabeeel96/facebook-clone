import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post({ profilePic, image, username, timestamp, message }) {
  var isoDateString = new Date().toISOString();
  return (
    <div className='post'>
      <div className='post__top'>
        <Avatar src={profilePic} className='post__avatar' />
      </div>
      <div className='post__topInfo'>
        <h3>{username}</h3>
        <p>{isoDateString}</p>
      </div>
      <div className='post__bottom'>{message}</div>
      <div className='post__image'>
        <img src={image} alt='' />
      </div>
      <div className='post__options'>
        <div className='post__option'>
          <ThumbUpIcon />
          <h3>Like</h3>
        </div>
        <div className='post__option'>
          <ChatBubbleOutlineIcon />
          <h3>Comment</h3>
        </div>
        <div className='post__option'>
          <NearMeIcon />
          <h3>Share</h3>
        </div>
        <div className='post__option'>
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
