import { SET_DIFFICULTY } from '../actions';

const INITIAL_STATE = { difficulty: 'EASY', };

export default function(state =INITIAL_STATE, action) {
    switch(action.type) {
        case SET_DIFFICULTY:

            return { ...state, difficulty: action.payload };
        
        default:
            return state;
    }
}