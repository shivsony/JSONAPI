import { createStore, applyMiddleware  } from 'redux';
import JsonReducer from './reducer/JsonReducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(JsonReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);

export default store
