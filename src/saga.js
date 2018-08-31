import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
    ONLINE,
    RECIEVED,
    REQUESTED
} from './reducer/JsonReducer';
import {
  onlineSite,
  requestApiData,
  receiveApiData
} from './actions/action';
import { fetchData } from './API';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
   try {
      //const user = yield call(Api.fetchUser, action.payload.userId);
      //yield put({type: "USER_FETCH_SUCCEEDED", user: user});
      const data = yield call(fetchData);
      yield put(receiveApiData(data));

   } catch (e) {
      //yield put({type: "USER_FETCH_FAILED", message: e.message});
     console.log(e);
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest(REQUESTED, getApiData);
}

export default mySaga;
