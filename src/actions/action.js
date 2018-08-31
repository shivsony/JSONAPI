import {
    ON_LINE,
    OFF_LINE,
    ALL,
    RECIEVED,
    REQUESTED
} from '../reducer/JsonReducer';

function onlineSite() {
    return {
        type: ON_LINE
    }
}

function offlineSite() {
    return {
        type: OFF_LINE
    }
}

function allSite() {
    return {
        type: ALL
    }
}

function requestApiData(shiv) {
  return {
    type: REQUESTED
  }
}

function receiveApiData(data) {
  return {
    type: RECIEVED,
    payload: data
  }
}
export {
    onlineSite,
    offlineSite,
    allSite,
    receiveApiData,
    requestApiData
}
