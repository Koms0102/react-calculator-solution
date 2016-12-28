import Dialog from 'material-ui/Dialog';
import Lock from 'material-ui/svg-icons/action/lock';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';

const LoginDialog = React.createClass({
  getInitialState() {
    return {
      errors: { password: '', username: '' },
      user: { password: '', username: '' }
    };
  },

  handleBlur(event) {
    let nextErrors;

    if (event.target.value.trim() === '') {
      nextErrors = Object.assign(
        {},
        this.state.errors,
        { [event.target.name]: 'This field is required' }
      );
    }
    else {
      nextErrors = Object.assign({}, this.state.errors);

      delete nextErrors[event.target.name];
    }

    this.setState({ errors: nextErrors });
  },

  handleChange(event) {
    const nextUser = Object.assign(
      {},
      this.state.user,
      { [event.target.name]: event.target.value }
    );

    this.setState({ user: nextUser });
  },

  handleRequestClose() {
    this.props.closeLoginDialog();
  },

  handleTouchTap() {
    if (Object.keys(this.state.errors).length) {
      return;
    }

    this.props.login(this.state.user);

    const nextUser = { password: '', username: '' };

    this.setState({ user: nextUser });
  },

  render() {
    const { loginDialog } = this.props;
    const { errors, user } = this.state;

    const styleTextField = {
      display: 'block'
    };

    const styleRaisedButton = {
      marginTop: '40px'
    };

    return <Dialog
      onRequestClose={this.handleRequestClose}
      open={loginDialog.open}
    >
      <h3>You need to be logged in to vote on things.</h3>

      <TextField
        errorText={errors.username}
        floatingLabelText="username"
        hintText="stanleypaddles"
        name="username"
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        style={styleTextField}
        value={user.username}
      />

      <TextField
        errorText={errors.password}
        floatingLabelText="password"
        name="password"
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        style={styleTextField}
        type="password"
        value={user.password}
      />

      <RaisedButton
        icon={<Lock />}
        label="Log in"
        onTouchTap={this.handleTouchTap}
        style={styleRaisedButton}
      />
    </Dialog>;
  }
});

export default LoginDialog;
