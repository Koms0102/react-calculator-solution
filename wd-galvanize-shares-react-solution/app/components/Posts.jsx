import Post from './Post';
import PostForm from './PostForm';
import React from 'react';
import weakKey from 'weak-key';

const Posts = React.createClass({
  render() {
    const { params } = this.props;
    let { posts } = this.props;

    if (params.topic) {
      posts = posts.filter((post) => params.topic === post.topic);
    }

    posts = posts.sort((p1, p2) => p1.votes < p2.votes);

    return <main>
      {posts.map((post) => {
        if (this.props.editing.indexOf(post) !== -1) {
          return <PostForm
            key={weakKey(post)}
            post={post}
            stopEditingPost={this.props.stopEditingPost}
            updatePost={this.props.updatePost}
          />;
        }

        return <Post
          incrementVotes={this.props.incrementVotes}
          key={weakKey(post)}
          openDeleteDialog={this.props.openDeleteDialog}
          post={post}
          startEditingPost={this.props.startEditingPost}
        />;
      })}
    </main>;
  }
});

export default Posts;
