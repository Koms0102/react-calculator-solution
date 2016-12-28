import Cancel from 'material-ui/svg-icons/navigation/cancel';
import Delete from 'material-ui/svg-icons/action/delete';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';

const DeleteDialog = React.createClass({
  handleRequestClose() {
    this.props.closeDeleteDialog();
  },

  handleTouchTapCancel() {
    this.props.closeDeleteDialog();
  },

  handleTouchTapDelete() {
    this.props.deletePost(this.props.deleteDialog.post);
  },

  render() {
    const actions = [
      <FlatButton
        icon={<Cancel />}
        key={0}
        label="Cancel"
        onTouchTap={this.handleTouchTapCancel}
        primary={true}
      />,

      <FlatButton
        icon={<Delete />}
        key={1}
        label="Delete"
        onTouchTap={this.handleTouchTapDelete}
        primary={true}
      />
    ];

    return <Dialog
      actions={actions}
      modal={false}
      onRequestClose={this.handleRequestClose}
      open={this.props.deleteDialog.open}
      title="Are you sure you want to delete this post?"
    >
      Once deleted, this post will be gone forever.
    </Dialog>;
  }
});

export default DeleteDialog;
