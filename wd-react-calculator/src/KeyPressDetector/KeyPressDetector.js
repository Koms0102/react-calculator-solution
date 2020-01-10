import React from 'react'

class KeyPressDetector extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.addEventListener('keypress', (e) => this.props.handleKeyPress(e.key))
  }



  render() {
    return (
    <div>
      { this.props.children }
    </div>
    )
  }
}

export default KeyPressDetector