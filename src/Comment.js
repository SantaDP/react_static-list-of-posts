import React from 'react';

const Comment = ({ comment }) => (
  <section key={comment.id}>
    <h3>{comment.name}</h3>
    <p>{comment.body}</p>
  </section>
)

export default Comment;