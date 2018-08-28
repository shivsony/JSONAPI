import React from 'react';
import './List.css';

class List extends React.Component {
  render(){
    return(
      <div className="wrapper-items">
        <div className="item-list-logo">
          <img className="item-list-logo-img" src={this.props.logo} alt="logo"/>
        </div>
        <div className="item-list-channel">
          <p> <a href="#">link</a> </p>
        </div>
        <div className="item-list-game">
          <p>game</p>
        </div>
        <div className="item-list-details">
          <p>details</p>
        </div>
      </div>
    )
  }
}

export default List
