// Welcome.js
import React, { Component } from 'react';
import Card from './Card';    // Adjust if your file is named differently
// import Message from './Message'; // Adjust if your file is named differently

import 'bootstrap/dist/css/bootstrap.min.css';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false,
      showComponent: false,
    };
  }

  handleClick = () => {
    this.setState({ showMessage: true, showComponent: true });
  };

  render() {
    return (
      <div className={this.props.className}> {/* Use the passed className here */}
        <h1>Class components Hooray !!</h1>
        <h1 className="title">This is another example of this component</h1>
        <Card onClick={this.handleClick} />
        {/* {this.state.showMessage && <Message />} */}
        {this.state.showComponent && <Welcome className={this.props.className} />}
      </div>
    );
  }
}

export default Welcome;
