import { NEW_GAME, GUESS_EVALUATED } from '../actions';

const INITIAL_STATE = { answer: {}, isSolved: false };

export default function(state =INITIAL_STATE, action) {
    switch(action.type) {
        case NEW_GAME:

            let colorChoices =[];

            switch(action.payload) {
                case 'MEDIUM':
                    colorChoices = [
                        'black',
                        'blue',
                        'green',
                        'pink',
                        'red',
                        'white',
                        'yellow',
                    ];
                break;

                case 'HARD':
                    colorChoices = [
                    'black',
                    'blue',
                    'brown',
                    'green',
                    'pink',
                    'red',
                    'white',
                    'yellow',
                ];
                break;

                default:
                    colorChoices = [
                        'black',
                        'blue',
                        'green',
                        'red',
                        'white',
                        'yellow',
                    ];
                break;
            }

            let colors = {
                    peg1: colorChoices[Math.floor(Math.random() * colorChoices.length)],
                    peg2: colorChoices[Math.floor(Math.random() * colorChoices.length)],
                    peg3: colorChoices[Math.floor(Math.random() * colorChoices.length)],
                    peg4: colorChoices[Math.floor(Math.random() * colorChoices.length)]
            };
            
            return { ...state, answer: colors, isSolved: false };
        
        case GUESS_EVALUATED:

            if (state.answer.peg1 === action.payload.peg1 &&
                state.answer.peg2 === action.payload.peg2 &&
                state.answer.peg3 === action.payload.peg3 &&
                state.answer.peg4 === action.payload.peg4) {
                    return { ...state, isSolved: true };
                }else {
                    return state;
                }
        
        default:

            return state;
    }
}