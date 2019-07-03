import React from 'react';

const User = ({ user }) => (
  <div className="post--list__user">
      <div className="post--list__user-name">{user.name}</div>  
      <div className="post--list__user-email">{user.email}</div> 
      <div className="post--list__user-address">{user.address.city}, {user.address.street}</div> 
    </div>
  )

export default User;