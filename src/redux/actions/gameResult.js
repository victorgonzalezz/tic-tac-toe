import * as types from '../actionTypes';


export const saveGameResult = (data) => ({
    type: types.SAVE_GAME_RESULT,
    payload: data
})
