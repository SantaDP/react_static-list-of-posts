import React from 'react';
import Comment from './Comment';

const CommentList = ({comments, visibile}) => (
  <div className={visibile ? 'post--list__comment--list' : 'post--list__comment--list-none'}>
    {comments.map(comment => (
      <Comment 
        key={comment.id} 
        comment={comment} 
      />
    ))}
  </div>
  
)

export default CommentList;