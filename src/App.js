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
      posts: this.getPostsWithUsersAndComments(postsFromServer, usersFromServer, commentsFromServer),
    });
  }

  getPostsWithUsersAndComments(posts, users, comments) {
    return posts.map(post => ({
        ...post,
        user: users.find(user => user.id === post.userId),
        comments: [...comments.filter(comment => comment.postId === post.id)]
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
