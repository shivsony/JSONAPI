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

const array = [1,2,3];


class App extends Component {
  constructor(props){
    super(props);
    this.click = this.click.bind(this);
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
    return (
      <div className="App">
        <MainApp click={this.click} array={array}/>
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
