import React from 'react';
import PropTypes from 'prop-types';
import './List.css';

class List extends React.Component {
  render(){
    return(
      <div className="wrapper-items">
        <div className="item-list-logo">
          <img className="item-list-logo-img" src={this.props.logo} alt="logo"/>
        </div>
        <div className="item-list-channel">
          <p> <a href={this.props.url}>{this.props.channel}</a> </p>
        </div>
        <div className="item-list-game">
          <p>{this.props.game}</p>
        </div>
        <div className="item-list-details">
          <p>{this.props.details}</p>
        </div>
      </div>
    )
  }
}

List.propTypes = {
  logo: PropTypes.string,
  channel: PropTypes.string,
  game: PropTypes.string,
  details: PropTypes.string
}

export default List
