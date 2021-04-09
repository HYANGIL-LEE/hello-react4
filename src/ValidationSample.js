import React, { Component } from 'react';
import './ValidationSample.css';

// 이거 나중에 다시 검증해봐야댐
class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false
  }

  handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    });
    this.input.focus();
}

  render() {
    return (
      <div>
        <input
        ref={(ref) => this.input=ref}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked ? (this.state.vaildated ? 'success' :
          'failure') : ''}
        />
        <button onClick={this.handleButtonClick}>검증쓰</button>
      </div>
    );
  }
}

export default ValidationSample;
