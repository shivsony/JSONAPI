import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  onlineSite,
  requestApiData,
  receiveApiData
} from '../../actions/action';
import './App.css';
import MainApp from '../MainApp/MainApp';

const streams = [
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas"
];

class App extends Component {
  constructor(props){
    super(props);
    this.click = this.click.bind(this);
  }
  componentWillMount(){
    this.props.requestApiData();
  }
  componentDidMount(){
    this.props.requestApiData();
  }
  click() {
    this.props.onlineSite();
    if(this.props.app){
      console.log('all');
    }
  }
  render() {
    var data = this.props.status
    return (
      <div className="App">
        <MainApp
            click={this.click}
            array={streams}
            image={this.props.status && data.stream.channel.logo}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    app: state.app,
    onLine: state.onLine,
    offLine: state.offLine,
    status: state.status,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onlineSite: bindActionCreators(onlineSite,dispatch),
    requestApiData: bindActionCreators(requestApiData, dispatch),
    receiveApiData: bindActionCreators(receiveApiData, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
