import { SET_GAME_TYPE, EVALUATE_SCORE, GAME_OVER } from '../actions';

const INITIAL_STATE = { gameType: null, score: 0, gameOver: false };

export default function(state =INITIAL_STATE, action) {
    switch(action.type) {
        case SET_GAME_TYPE:

            return { ...state, gameType: action.payload, score: 0, gameOver: false };
        
        case EVALUATE_SCORE:
            return { ...state, score: action.payload };

        case GAME_OVER:

            return { ...state, gameOver: true };

        default:
            return state;
    }
}