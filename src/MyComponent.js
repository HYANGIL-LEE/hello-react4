import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{

  static defualtProps = {
    name: '본명은 임창균'
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
  };
    render(){
    const {name, favoriteNumber, children} = this.props;
    return (
        <div>앙뇽 내 이름은 {name}이얌<br/>
    지금 배우고 있는 건 {children}이라구. 참고로 이건 children값
    <br/>
    우리 꾸꿍이는 {favoriteNumber}년생이예욥
    </div>
    );
   
  }
}

export default MyComponent;