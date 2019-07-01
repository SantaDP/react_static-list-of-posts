import React from 'react';
import Post from './Post';

const PostList = ({ items }) => (
  <div className="post--list">
    <ul>
      {items.map(item => (
        <li key={item.id} className="post--list__list">
          <Post item={item} />
        </li>
      ))}
    </ul>
  </div>
)

export default PostList;