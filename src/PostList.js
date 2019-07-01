import React from 'react';
import Post from './Post';

const PostList = ({ items }) => (
  <div className="postList">
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Post item={item} />
        </li>
      ))}
    </ul>
  </div>
)

export default PostList;