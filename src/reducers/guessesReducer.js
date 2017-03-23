import { GUESS_SUBMITTED } from '../actions';
import { NEW_GAME } from '../actions';

const INITIAL_STATE = { all: [] };

export default function(state =INITIAL_STATE, action) {
    switch(action.type) {
        case NEW_GAME:
            return { ...state, all: [] };

        case GUESS_SUBMITTED:
            return { ...state, all: state.all.concat(action.payload) };

        default:
            return state;
    }
}