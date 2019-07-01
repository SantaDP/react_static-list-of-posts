import React from 'react';
import User from './User';
import CommentList from './CommentList';

class Post extends React.Component {
  state = {
    item: this.props.item,
    comments: this.props.item.comments.map(coment =>({...coment, visibile:false})) 
  }
  
  handleShowComments = () =>{
    const copyComments = [...this.state.comments]
    copyComments.map(coment=>(coment.visibile = !coment.visibile))
    this.setState(()=> {
      return {
        comments: copyComments,
      }
    })
  }

  render() {
    return (
      <section className="post--list__post">
        <h2>{this.state.item.title}</h2>
        <p>{this.state.item.body}</p>
        <User user={this.state.item.user} />
        <div>
          <button onClick={this.handleShowComments}> Comments - {this.state.item.comments.length}</button>
        </div>
        <CommentList 
          comments={this.state.comments} 
          postId={this.state.item.id} 
          visibile={this.state.comments[0].visibile} 
        />
      </section>
    )
  }
}

export default Post;