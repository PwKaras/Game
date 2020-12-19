import * as actionTypes from '../actions/actionTypes';

const initialState = {
    level: 1
};

const levelReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LEVEL_UP:
            return {
                ...state,
                level: state.level + 1
            }
        default: return state
    };
};

export default levelReducer;