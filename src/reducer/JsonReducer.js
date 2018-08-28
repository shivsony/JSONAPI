

const ONLINE = 'ONLINE';
const REQUESTED = 'REQUESTED';
const RECIEVED = 'RECIEVED';
const initialState = {
    app: true,
    onLine: false,
    offLine: false,
    status: null
}

function JsonReducer(state=initialState,action){
    switch(action.type){
        case ONLINE:
            return Object.assign({}, state , {
                app: !state.app
            });
        case REQUESTED:
            return state
        case RECIEVED:
            return Object.assign({},state,{
              status: action.payload
            });
        default:
            return state;
    }
}

export default JsonReducer

export {
    ONLINE,
    RECIEVED,
    REQUESTED
}
