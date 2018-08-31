import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  onlineSite,
  offlineSite,
  allSite,
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
    this.clickOnLine = this.clickOnLine.bind(this);
    this.clickOffLine = this.clickOffLine.bind(this);
    this.clickAll = this.clickAll.bind(this);
  }
  componentWillMount(){
    this.props.requestApiData('shiv');
  }
  clickOnLine() {
    this.props.onlineSite();
  }
  clickOffLine() {
    this.props.offlineSite();
  }
  clickAll() {
    this.props.allSite();
  }

  render() {
    var data = this.props.status
    return (
      <div className="App">
        <MainApp
            clickOnLine={this.clickOnLine}
            clickOffLine={this.clickOffLine}
            clickAll={this.clickAll}
            array = {streams}
            data = {data}
            all={this.props.all}
            offLine={this.props.offLine}
            onLine = {this.props.onLine}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    all: state.all,
    onLine: state.onLine,
    offLine: state.offLine,
    status: state.status,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onlineSite: bindActionCreators(onlineSite,dispatch),
    offlineSite: bindActionCreators(offlineSite, dispatch),
    allSite: bindActionCreators(allSite, dispatch),
    requestApiData: bindActionCreators(requestApiData, dispatch),
    receiveApiData: bindActionCreators(receiveApiData, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
