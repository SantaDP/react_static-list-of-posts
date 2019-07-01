import React from 'react';

const Comment = ({ comment }) => (
  <section key={comment.id} className="post--list__comment">
    <h3 className="post--list__comment--title">{comment.name}</h3>
    <p className="post--list__comment--paragraph">{comment.body}</p>
  </section>
)

export default Comment;