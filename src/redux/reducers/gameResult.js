import * as types from '../actionTypes';

let initialState = {
    data: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SAVE_GAME_RESULT: {
            return {
                ...state,
                data: action.payload && action.payload || []
            }
        }
        default:
            return state
    }
}