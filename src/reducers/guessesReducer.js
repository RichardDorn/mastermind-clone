import { GUESS_SUBMITTED, NEW_GAME, GUESS_EVALUATED } from '../actions';

const INITIAL_STATE = { all: [], currentGuess: {} };

export default function(state =INITIAL_STATE, action) {
    switch(action.type) {
        case NEW_GAME:
            
            return { ...state, all: [] };

        case GUESS_SUBMITTED:

            return { ...state, currentGuess: action.payload };

        case GUESS_EVALUATED:
            
            return { ...state, all: state.all.concat(action.payload) };

        default:
            return state;
    }
}