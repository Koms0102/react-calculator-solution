import React from 'react';
import PropTypes from 'prop-types'

const Screen = ({displayValue}) => (
  <div id="screen-container">
    <input id="screen" value={displayValue}/>
  </div>
)

Screen.propTypes = {
  displayValue: PropTypes.string.isRequired
}

export default Screen;