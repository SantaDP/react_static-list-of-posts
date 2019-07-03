import React from 'react';
import Post from './Post';

class PostList extends React.Component {
  state = {
    posts: this.props.items,
  }

  handleSort = (e) => {
    const copyPosts = this.props.items
    const value = e.target.value.trim();
    let filteredList = copyPosts.filter(item => {
      return item.title.toLowerCase().search(value.toLowerCase()) !== -1 || item.body.toLowerCase().search(value.toLowerCase()) !== -1;
    });
    filteredList.length > 0 ?
    this.setState({posts: filteredList,})
    : 
    this.setState({posts: this.props.items })

  }

  render() {
    return (
      <div className="post--list">
        <input 
          type="text" 
          placeholder="Serch" 
          onChange={this.handleSort}
          />
        <ul>
          {this.state.posts.map(item => (
            <li key={item.id} className="post--list__list">
              <Post item={item} />
            </li>
      ))}
        </ul>
      </div>
    )
  }
  
}

export default PostList;