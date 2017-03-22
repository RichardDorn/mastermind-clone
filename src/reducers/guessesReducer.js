import { GUESS_SUBMITTED } from '../actions/index';

const INITIAL_STATE = { all: [], newGuess: null };

export default function(state =INITIAL_STATE, action) {
    switch(action.type) {
        case GUESS_SUBMITTED:
            return { ...state, newGuess: action.payload, all: state.all.concat(action.payload) };

        default:
            return state;
    }
}