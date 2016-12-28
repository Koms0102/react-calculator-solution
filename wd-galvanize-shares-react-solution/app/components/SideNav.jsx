import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';
import { withRouter } from 'react-router';

const SideNav = React.createClass({
  handleRequestChange() {
    this.props.toggleSideNav();
  },

  handleTouchTapLogInMenuItem() {
    this.props.openLoginDialog();
  },

  handleTouchTapLogOutMenuItem() {
    this.props.logout();
  },

  handleTouchTapNewPostMenuItem() {
    this.props.createPost();
    this.props.toggleSideNav(false);
  },

  render() {
    const { sideNav, user } = this.props;

    const menuItems = [];

    menuItems.push(<MenuItem
      key={0}
      onTouchTap={this.handleTouchTapNewPostMenuItem}
    >
      New Post
    </MenuItem>);

    if (user) {
      menuItems.push(<MenuItem
        key={1}
        onTouchTap={this.handleTouchTapLogOutMenuItem}
      >
        Log out
      </MenuItem>);
    }
    else {
      menuItems.push(<MenuItem
        key={1}
        onTouchTap={this.handleTouchTapLogInMenuItem}
      >
        Log in
      </MenuItem>);
    }

    return <Drawer
      docked={false}
      onRequestChange={this.handleRequestChange}
      open={sideNav.open}
    >
      {menuItems}
    </Drawer>;
  }
});

export default withRouter(SideNav);
