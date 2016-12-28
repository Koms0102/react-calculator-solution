import KeyboardArrowDown
  from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import KeyboardArrowUp
  from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import React from 'react';

const Post = React.createClass({
  contextTypes: {
    muiTheme: React.PropTypes.object.isRequired
  },

  shouldComponentUpdate(nextProps) {
    return nextProps.post !== this.props.post;
  },

  handleTouchTapDelete() {
    this.props.openDeleteDialog(this.props.post);
  },

  handleTouchTapEdit() {
    this.props.startEditingPost(this.props.post);
  },

  handleTouchTapDown() {
    this.props.incrementVotes(this.props.post, -1);
  },

  handleTouchTapUp() {
    this.props.incrementVotes(this.props.post, 1);
  },

  render() {
    const { post } = this.props;

    const styleAside = {
      minWidth: '60px'
    };

    const stylePaper = {
      display: 'flex',
      margin: '10px',
      padding: '16px'
    };

    const styleSubTitle = {
      color: this.context.muiTheme.palette.primary3Color,
      fontSize: '14px',
      marginTop: '8px'
    };

    const styleTitle = {
      color: this.context.muiTheme.palette.primary1Color,
      fontSize: '22px',
      textDecoration: 'none'
    };

    const styleTopic = {
      color: this.context.muiTheme.palette.primary1Color,
      textDecoration: 'none'
    };

    const styleAction = Object.assign({}, styleTopic, {
      cursor: 'pointer',
      fontWeight: 500,
      marginRight: '8px'
    });

    const styleVoter = {
      cursor: 'pointer'
    };

    const styleVotes = {
      marginLeft: '7px'
    };

    return <Paper style={stylePaper}>
      <aside style={styleAside}>
        <KeyboardArrowUp
          onTouchTap={this.handleTouchTapUp}
          style={styleVoter}
        />

        <div style={styleVotes}>{post.votes}</div>

        <KeyboardArrowDown
          onTouchTap={this.handleTouchTapDown}
          style={styleVoter}
        />
      </aside>

      <article>
        <a href={post.url} style={styleTitle}>
          {post.title}
        </a>

        <div style={styleSubTitle}>
          submitted by {post.submitter} to {' '}

          <Link style={styleTopic} to={`/topics/${post.topic}`}>
            {`/topics/${post.topic}`}
          </Link>
        </div>

        <div style={styleSubTitle}>
          <a onTouchTap={this.handleTouchTapEdit} style={styleAction}>
            edit
          </a>

          <a onTouchTap={this.handleTouchTapDelete} style={styleAction}>
            delete
          </a>
        </div>
      </article>
    </Paper>;
  }
});

export default Post;
