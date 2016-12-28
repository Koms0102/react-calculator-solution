import { Card, CardHeader } from 'material-ui/Card';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';

injectTapEventPlugin();

const CheckoutForm = React.createClass({
  render() {
    return (
      <div>
        <div className="row container">
          <div className="col s6">
            <TextField
              hintText="First Name"
              floatingLabelText="First Name"
            />
          </div>
          <TextField
            className="col s6"
            hintText="Last Name"
            floatingLabelText="Last Name"
          />
          <div className="col s12">
            <TextField
              className="col s12"
              hintText="Email"
              floatingLabelText="Email"
            />
          </div>
        </div>
      </div>
    )
  }
});

export default CheckoutForm;
