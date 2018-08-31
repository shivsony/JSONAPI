

const ON_LINE = 'ON_LINE';
const OFF_LINE = 'OFF_LINE'
const ALL = 'ALL'
const REQUESTED = 'REQUESTED';
const RECIEVED = 'RECIEVED';
const initialState = {
    all: true,
    onLine: false,
    offLine: false,
    status: null,
}

function JsonReducer(state=initialState,action){
    switch(action.type){
        case ON_LINE:
            return Object.assign({}, state , {
                onLine: true,
                offLine: false,
                all: false
            });
        case OFF_LINE:
            return Object.assign({}, state , {
                onLine: false,
                offLine: true,
                all: false
            });
        case ALL:
            return Object.assign({}, state , {
                onLine: false,
                offLine: false,
                all: true
            });
        case REQUESTED:
            return state
        case RECIEVED:
            return Object.assign({},state,{
              status: action.payload,
            });
        default:
            return state;
    }
}

export default JsonReducer

export {
    ON_LINE,
    OFF_LINE,
    ALL,
    RECIEVED,
    REQUESTED
}
