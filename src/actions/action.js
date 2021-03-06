import {
    ONLINE,
    RECIEVED,
    REQUESTED
} from '../reducer/JsonReducer';

function onlineSite() {
    return {
        type: ONLINE
    }
}

function requestApiData() {
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
    receiveApiData,
    requestApiData
}
