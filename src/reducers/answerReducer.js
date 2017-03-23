import { NEW_GAME } from '../actions/index';
import { GUESS_SUBMITTED } from '../actions';

const INITIAL_STATE = { answer: {}, isSolved: false };

export default function(state =INITIAL_STATE, action) {
    switch(action.type) {
        case NEW_GAME:
            let colorChoices = [
                'black',
                'blue',
                'green',
                'red',
                'white',
                'yellow',
            ];

            let colors = {
                    peg1: colorChoices[Math.floor(Math.random() * colorChoices.length)],
                    peg2: colorChoices[Math.floor(Math.random() * colorChoices.length)],
                    peg3: colorChoices[Math.floor(Math.random() * colorChoices.length)],
                    peg4: colorChoices[Math.floor(Math.random() * colorChoices.length)]
            };
            
            return { ...state, answer: colors };
        
        case GUESS_SUBMITTED:

            //Evaluate submitted guess against answer here.
            //Save true or false into variable 'solution'.

            let solution = false;

            let peg1 = state.answer.peg1;
            let peg2 = state.answer.peg2;
            let peg3 = state.answer.peg3;
            let peg4 = state.answer.peg4;

            let peg1A = action.payload.peg1;
            let peg2A = action.payload.peg2;
            let peg3A = action.payload.peg3;
            let peg4A = action.payload.peg4;

            if(peg1A === peg1 && peg2A === peg2 && peg3A === peg3 && peg4A === peg4) {
                solution = true;
            }

            return { ...state, isSolved: solution };

        default:
            return state;
    }
}