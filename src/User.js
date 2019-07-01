import React from 'react';

const User = ({ user }) => (
  <div>
      <span className="userName">{user.name}</span> -  
      <span className="userEmail"> {user.email}</span> -  
      <span className="userAddress"> {user.address.city}, {user.address.street}</span> 
    </div>
  )

export default User;