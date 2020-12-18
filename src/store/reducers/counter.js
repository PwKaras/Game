import * as actionTypes from '../actions/actionTypes';

const initialState = {
    counter: 0
};

const coutnerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        default:
            return state;
    }
};

export default coutnerReducer;