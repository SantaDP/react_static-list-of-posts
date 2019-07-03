import React from 'react';
import User from './User';
import CommentList from './CommentList';

class Post extends React.Component {
  state = {
    item: this.props.item,
    comments: this.props.item.comments.map(comment =>({...comment, visibile:false})) 
  }
  
  handleShowComments = (id) =>{
    const copyComments = [...this.state.comments]
    copyComments.map(comment=>(comment.visibile = !comment.visibile))
    this.setState(()=> {
      return {
        comments: copyComments,
      }
    })
  }

  render() {
    return (
      <section className="post--list__post">
        <User user={this.state.item.user} />
        <h2 className="post--list__post--title">{this.state.item.title}</h2>
        <p>{this.state.item.body}</p>
          <button className="post--list__post-btn" onClick={()=>this.handleShowComments(this.state.item.id)}> Comments - {this.state.item.comments.length}</button>
        <CommentList 
          comments={this.state.comments} 
          visibile={this.state.comments[0].visibile} 
        />
      </section>
    )
  }
}

export default Post;