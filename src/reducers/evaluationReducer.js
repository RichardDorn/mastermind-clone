import { EVALUATE_GUESS } from '../actions';

const INITIAL_STATE = { currentGuess: {}, isSolved: false };

export default function(state =INITIAL_STATE, action) {
    switch(action.type) {
        case EVALUATE_GUESS:

            let peg1 = action.test.peg1;
            let peg2 = action.test.peg2;
            let peg3 = action.test.peg3;
            let peg4 = action.test.peg4;

            let peg1A = action.payload.peg1;
            let peg2A = action.payload.peg2;
            let peg3A = action.payload.peg3;
            let peg4A = action.payload.peg4;

            let blackHints = 0;

            //Compare each peg in answer to each peg in guess. Increment blackHints on each match
            if(peg1 === peg1A){ blackHints++; }
            if(peg2 === peg2A){ blackHints++; }
            if(peg3 === peg3A){ blackHints++; }
            if(peg4 === peg4A){ blackHints++; }
            
            //If all four pegs match, puzzle is solved. Return new state.
            if(blackHints === 4){ 
                
                action.payload.hint1 = 'black';
                action.payload.hint2 = 'black';
                action.payload.hint3 = 'black';
                action.payload.hint4 = 'black';

                return { ...state, isSolved: true, currentGuess: action.payload };
             }

            //If puzzle is not solved calculate number of whiteHints
            let colorCount = {
                black: 0,
                blue: 0,
                brown: 0,
                green: 0,
                pink: 0,
                red: 0,
                white: 0,
                yellow: 0
            };
            let totalHints = 0;
            
            //For each peg in the answer increment it's color in colorCount by 1
            Object.keys(action.test).forEach(function(key){ colorCount[action.test[key]]++; });
            
            //Compare each peg in guess to colorCount. If peg's color is > 1 in colorCount add 1 to totalHints and decrease that color's count by 1.
            Object.keys(action.payload).forEach(function(key){
                if( colorCount[action.payload[key]] ){
                    totalHints++;
                    colorCount[action.payload[key]]--;
                }
            });

            let whiteHints = totalHints - blackHints;
            
            //Assign proper colors to hint pegs. Any blacks first then any whites, so the answer isn't given away by order of hint pegs.
            switch(blackHints){
                case 3:
                    if(whiteHints) {
                        action.payload.hint1 = 'black';
                        action.payload.hint2 = 'black';
                        action.payload.hint3 = 'black';
                        action.payload.hint4 = 'white';

                        return { ...state, isSolved: false, currentGuess: action.payload };
                    }else {
                        action.payload.hint1 = 'black';
                        action.payload.hint2 = 'black';
                        action.payload.hint3 = 'black';
                        action.payload.hint4 = 'none';

                        return { ...state, isSolved: false, currentGuess: action.payload };
                    }

                case 2:
                    if(whiteHints === 2){
                        action.payload.hint1 = 'black';
                        action.payload.hint2 = 'black';
                        action.payload.hint3 = 'white';
                        action.payload.hint4 = 'white';

                        return { ...state, isSolved: false, currentGuess: action.payload };
                    }else if(whiteHints === 1) {
                        action.payload.hint1 = 'black';
                        action.payload.hint2 = 'black';
                        action.payload.hint3 = 'white';
                        action.payload.hint4 = 'none';

                        return { ...state, isSolved: false, currentGuess: action.payload };
                    }else {
                        action.payload.hint1 = 'black';
                        action.payload.hint2 = 'black';
                        action.payload.hint3 = 'none';
                        action.payload.hint4 = 'none';

                        return { ...state, isSolved: false, currentGuess: action.payload };
                    }

                case 1:
                    if(whiteHints === 3) {
                        action.payload.hint1 = 'black';
                        action.payload.hint2 = 'white';
                        action.payload.hint3 = 'white';
                        action.payload.hint4 = 'white';

                        return { ...state, isSolved: false, currentGuess: action.payload };
                    }else if(whiteHints === 2) {
                        action.payload.hint1 = 'black';
                        action.payload.hint2 = 'white';
                        action.payload.hint3 = 'white';
                        action.payload.hint4 = 'none';

                        return { ...state, isSolved: false, currentGuess: action.payload };
                    }else if(whiteHints === 1) {
                        action.payload.hint1 = 'black';
                        action.payload.hint2 = 'white';
                        action.payload.hint3 = 'none';
                        action.payload.hint4 = 'none';

                        return { ...state, isSolved: false, currentGuess: action.payload };
                    }else{
                        action.payload.hint1 = 'black';
                        action.payload.hint2 = 'none';
                        action.payload.hint3 = 'none';
                        action.payload.hint4 = 'none';

                        return { ...state, isSolved: false, currentGuess: action.payload };
                    }
                
                default:
                    if(whiteHints === 4) {
                        action.payload.hint1 = 'white';
                        action.payload.hint2 = 'white';
                        action.payload.hint3 = 'white';
                        action.payload.hint4 = 'white';

                        return { ...state, isSolved: false, currentGuess: action.payload };
                    }else if(whiteHints === 3) {
                        action.payload.hint1 = 'white';
                        action.payload.hint2 = 'white';
                        action.payload.hint3 = 'white';
                        action.payload.hint4 = 'none';

                        return { ...state, isSolved: false, currentGuess: action.payload };
                    }else if(whiteHints === 2) {
                        action.payload.hint1 = 'white';
                        action.payload.hint2 = 'white';
                        action.payload.hint3 = 'none';
                        action.payload.hint4 = 'none';

                        return { ...state, isSolved: false, currentGuess: action.payload };
                    }else if(whiteHints === 1) {
                        action.payload.hint1 = 'white';
                        action.payload.hint2 = 'none';
                        action.payload.hint3 = 'none';
                        action.payload.hint4 = 'none';

                        return { ...state, isSolved: false, currentGuess: action.payload };
                    }else{
                        action.payload.hint1 = 'none';
                        action.payload.hint2 = 'none';
                        action.payload.hint3 = 'none';
                        action.payload.hint4 = 'none';

                        return { ...state, isSolved: false, currentGuess: action.payload };
                    }
            }

        default:

            return state;
    }
}