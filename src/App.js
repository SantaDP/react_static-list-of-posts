import React from 'react';
import './App.css';
import postsFromServer from './posts';
import usersFromServer from './users';
import commentsFromServer from './comments';
import PostList from './PostList'



class App extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.setState({
      posts: this.getPostsWithUsers(postsFromServer, usersFromServer),
    });
  }

  getPostsWithUsers(posts, users) {
    return posts.map(post => ({
        ...post,
        user: users.find(user => user.id === post.userId),
      }));
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <h1>Post List</h1>
        <PostList 
          items={posts}
        />
      </div>
    );
  }
}

export default App;
