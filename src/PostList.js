
import React from 'react'

const Comments = ({ comments }) => (
  <div className="postList__comments">
    <h2>Comments ({comments.length})</h2>
    {comments.map(comment => (
      <section key={comment.id}>
        <h3>{comment.name}</h3>
        <p>{comment.body}</p>
      </section>
    ))}
  </div>
)

const User = ({ user }) => (
<div>
    <span className="userName">{user.name}</span> -  
    <span className="userEmail"> {user.email}</span> -  
    <span className="userAddress"> {user.address.city}, {user.address.street}</span> 
  </div>

)

class Post extends React.Component {
  state = {
    item: this.props.item,
    comments: this.props.item.comments, 
  }
  
  handleShowComments = (id) =>{
    const copyComments = [...this.state.comments]
    console.log(id, copyComments)
  }

  render() {
    return (
      <section>
        <h2>{this.state.item.title}</h2>
        <p>{this.state.item.body}</p>
        <User user={this.state.item.user} />
        <div>
          <button onClick={()=>this.handleShowComments(this.state.item.id)}> Comments - {this.state.item.comments.length}</button>
        </div>
        <Comments comments={this.state.comments} postId={this.state.item.id} />
        
      </section>
    )
  }
}
  
 



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