
import React from 'react'

const User = ({ user }) => (
<div>
    <span className="userName">{user.name}</span> -  
    <span className="userEmail"> {user.email}</span> -  
    <span className="userAddress"> {user.address.city}, {user.address.street}</span> 
  </div>

)

const Post = ({ item }) => (
  <section>
    <h2>{item.title}</h2>
    <p>{item.body}</p>
    <User user={item.user} />
    
  </section>
 
)


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
);

export default PostList;