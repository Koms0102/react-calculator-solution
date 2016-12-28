import Paper from 'material-ui/Paper';
import React from 'react';

const NotFound = React.createClass({
  render() {
    const stylePaper = {
      margin: '10px',
      padding: '16px'
    };

    return <main>
      <Paper style={stylePaper}>
        <h2>Page Not Found</h2>
      </Paper>
    </main>;
  }
});

export default NotFound;
