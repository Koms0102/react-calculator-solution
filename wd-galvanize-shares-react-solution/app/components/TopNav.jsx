import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import { withRouter } from 'react-router';

const TopNav = React.createClass({
  handleLeftIconButtonTouchTap() {
    this.props.openSideNav();
  },

  handleTitleTouchTap() {
    this.props.router.push('/');
  },

  handleTouchTapLogInButton() {
    this.props.openLoginDialog();
  },

  handleTouchTapLogOutButton() {
    this.props.logout();
  },

  handleTouchTapNewPostButton() {
    this.props.createPost();
  },

  render() {
    const { user } = this.props;

    const styleAppBarItem = {
      height: '64px',
      lineHeight: '64px'
    };

    const styleAppBarItemLabel = {
      fontSize: '16px'
    };

    const styleTitle = {
      cursor: 'pointer'
    };

    const buttons = [];

    buttons.push(<FlatButton
      key={0}
      label="New Post"
      labelStyle={styleAppBarItemLabel}
      onTouchTap={this.handleTouchTapNewPostButton}
      style={styleAppBarItem}
    />);

    if (user) {
      buttons.push(<FlatButton
        key={1}
        label="Log out"
        labelStyle={styleAppBarItemLabel}
        onTouchTap={this.handleTouchTapLogOutButton}
        style={styleAppBarItem}
      />);
    }
    else {
      buttons.push(<FlatButton
        key={1}
        label="Log in"
        labelStyle={styleAppBarItemLabel}
        onTouchTap={this.handleTouchTapLogInButton}
        style={styleAppBarItem}
      />);
    }

    return <AppBar
      onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap}
      onTitleTouchTap={this.handleTitleTouchTap}
      title="Galvanize Shares"
      titleStyle={styleTitle}
    >
      {buttons}
    </AppBar>;
  }
});

export default withRouter(TopNav);
