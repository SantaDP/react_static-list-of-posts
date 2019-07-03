import React from 'react';
import './App.css';
import PostList from './components/PostList'
import {getPosts, getUsers, getComments } from './api'

class App extends React.Component {
  state = {
    filterValue: [],
    isLoaded: false,
    posts: [],
    btnText: 'Load',

  };

  handleLoadData = async () => {
      this.setState({
        btnText: 'Loading...',
      });
      const posts = await getPosts();
      const users = await getUsers();
      const comments = await getComments();
      const items = this.getPostsWithUsersAndComments(posts, users, comments);
      setTimeout(()=> {
        this.setState({
          posts: items,
          isLoaded: true,
        });
    }, 1500)
        
  }
 

  getPostsWithUsersAndComments(posts, users, comments) {
    return posts.map(post => ({
        ...post,
        user: users.find(user => user.id === post.userId),
        comments: comments.filter(comment => comment.postId === post.id)
      }));
  }

  
  render() {
    const { posts, isLoaded, btnText } = this.state;
    return (
      <div className="App"><div></div>
        {isLoaded ? (
          <PostList 
          items={posts}
          /> ) : (
          <button 
          onClick={this.handleLoadData}
          className="post--list__btn-loaded"
          >
          {btnText}
          </button> 
          
          )
        }
        
      </div>
    );
  }
}

export default App;
