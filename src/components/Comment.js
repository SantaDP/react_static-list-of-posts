import React from 'react';

const Comment = ({ comment }) => (
  <section key={comment.id} className="post--list__comment">
    <h3 className="post--list__comment--title">{comment.name}</h3>
    <p className="post--list__comment--paragraph">{comment.body}</p>
    <div className="post--list__comment--email">
      <span>Email: </span><a href="javascript:void(0)" className="post--list__comment--email-link">{comment.email}</a>
    </div>
  </section>
)

export default Comment;