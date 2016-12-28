import DeleteDialog from './DeleteDialog';
import LoginDialog from './LoginDialog';
import React from 'react';
import SideNav from './SideNav';
import Snackbar from 'material-ui/Snackbar';
import TopNav from './TopNav';
import axios from 'axios';

const App = React.createClass({
  getInitialState() {
    return {
      deleteDialog: {
        open: false,
        post: null
      },

      editing: [],

      loginDialog: {
        open: false
      },

      posts: [],

      sideNav: {
        open: false
      },

      snackbar: {
        message: '',
        open: false
      },

      user: null
    };
  },

  componentWillMount() {
    axios.get('/api/posts')
      .then((res) => {
        const nextPosts = res.data;

        this.setState({ posts: nextPosts });
      })
      .catch(() => {
        const nextSnackbar = {
          message: 'Unable to retrieve posts',
          open: true
        };

        this.setState({ snackbar: nextSnackbar });
      });
  },

  handleRequestCloseSnackbar() {
    const nextSnackbar = { message: '', open: false };

    this.setState({ snackbar: nextSnackbar });
  },

  closeDeleteDialog() {
    const nextDeleteDialog = { open: false, post: null };

    this.setState({ deleteDialog: nextDeleteDialog });
  },

  closeLoginDialog() {
    const nextLoginDialog = { open: false };

    this.setState({ loginDialog: nextLoginDialog });
  },

  createPost() {
    const post = {
      submitter: 'stanleypaddles',
      title: '',
      topic: this.props.params.topic || '',
      url: '',
      votes: Infinity
    };

    const nextEditing = this.state.editing.concat(post);
    const nextPosts = this.state.posts.concat(post);

    this.setState({ editing: nextEditing, posts: nextPosts });
  },

  deletePost(post) {
    const nextPosts = this.state.posts.filter((element) => post !== element);
    const nextDeleteDialog = { open: false, post: null };

    this.setState({ deleteDialog: nextDeleteDialog, posts: nextPosts });
  },

  incrementVotes(post, value) {
    if (!this.state.user) {
      const nextLoginDialog = { open: true };

      return this.setState({ loginDialog: nextLoginDialog });
    }

    const nextPosts = this.state.posts.map((element) => {
      if (post !== element) {
        return element;
      }

      const nextVotes = post.votes + value;
      const nextPost = Object.assign({}, post, { votes: nextVotes });

      return nextPost;
    });

    this.setState({ posts: nextPosts });
  },

  login(user) {
    const nextLoginDialog = { open: false };
    const nextSnackbar = { message: 'Logged in', open: true };
    const nextUser = user.username;

    this.setState({
      loginDialog: nextLoginDialog,
      snackbar: nextSnackbar,
      user: nextUser
    });

    return true;
  },

  logout() {
    const nextLoginDialog = { open: false };
    const nextSideNav = { open: false };
    const nextSnackbar = { message: 'Logged out', open: true };
    const nextUser = null;

    this.setState({
      loginDialog: nextLoginDialog,
      sideNav: nextSideNav,
      snackbar: nextSnackbar,
      user: nextUser
    });
  },

  openSideNav() {
    const nextSideNav = { open: true };

    this.setState({ sideNav: nextSideNav });
  },

  openLoginDialog() {
    const nextLoginDialog = { open: true };
    const nextSideNav = { open: false };

    this.setState({ loginDialog: nextLoginDialog, sideNav: nextSideNav });
  },

  openDeleteDialog(post) {
    const nextDeleteDialog = { open: true, post };

    this.setState({ deleteDialog: nextDeleteDialog });
  },

  startEditingPost(post) {
    const nextEditing = this.state.editing.concat(post);

    this.setState({ editing: nextEditing });
  },

  stopEditingPost(post) {
    const nextEditing = this.state.editing.filter((el) => post !== el);

    let nextPosts = this.state.posts;

    if (!Number.isFinite(post.votes)) {
      nextPosts = this.state.posts.filter((el) => post !== el);
    }

    this.setState({ editing: nextEditing, posts: nextPosts });
  },

  toggleSideNav(open) {
    const nextSideNav = { open };

    this.setState({ sideNav: nextSideNav });
  },

  updatePost(post, nextPost) {
    axios.post('/api/posts', nextPost)
      .then((res) => {
        const nextEditing = this.state.editing.filter((el) => post !== el);

        const nextPosts = this.state.posts.map((element) => {
          if (post !== element) {
            return element;
          }

          return res.data;
        });

        this.setState({ editing: nextEditing, posts: nextPosts });
      })
      .catch(() => {
        const nextSnackbar = {
          message: 'Unable to save post',
          open: true
        };

        this.setState({ snackbar: nextSnackbar });
      });
  },

  getChildrenProps() {
    const props = {
      '/': {
        editing: this.state.editing,
        incrementVotes: this.incrementVotes,
        openDeleteDialog: this.openDeleteDialog,
        params: this.props.params,
        posts: this.state.posts,
        startEditingPost: this.startEditingPost,
        stopEditingPost: this.stopEditingPost,
        updatePost: this.updatePost
      }
    };

    props['/topics/:topic'] = props['/'];

    const matchPath = this.props.routes.reduce((path, route) => {
      return path + (route.path || '');
    }, '');

    return props[matchPath];
  },

  render() {
    return <div>
      <DeleteDialog
        closeDeleteDialog={this.closeDeleteDialog}
        deleteDialog={this.state.deleteDialog}
        deletePost={this.deletePost}
      />

      <LoginDialog
        closeLoginDialog={this.closeLoginDialog}
        login={this.login}
        loginDialog={this.state.loginDialog}
      />

      <SideNav
        createPost={this.createPost}
        logout={this.logout}
        openLoginDialog={this.openLoginDialog}
        sideNav={this.state.sideNav}
        toggleSideNav={this.toggleSideNav}
        user={this.state.user}
      />

      <Snackbar
        autoHideDuration={3000}
        message={this.state.snackbar.message}
        onRequestClose={this.handleRequestCloseSnackbar}
        open={this.state.snackbar.open}
      />

      <TopNav
        createPost={this.createPost}
        logout={this.logout}
        openLoginDialog={this.openLoginDialog}
        openSideNav={this.openSideNav}
        user={this.state.user}
      />

      {React.cloneElement(
        this.props.children,
        this.getChildrenProps()
      )}
    </div>;
  }
});

export default App;
