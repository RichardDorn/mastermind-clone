import { createSelector } from 'reselect';

const answerSelector = state => state.answer.answer;
const currentGuessSelector = state => state.guesses.currentGuess;

const evaluateGuess = (answer, currentGuess) => {
    let peg1 = answer.peg1;
    let peg2 = answer.peg2;
    let peg3 = answer.peg3;
    let peg4 = answer.peg4;

    let peg1A = currentGuess.peg1;
    let peg2A = currentGuess.peg2;
    let peg3A = currentGuess.peg3;
    let peg4A = currentGuess.peg4;

    let blackHints = 0;

    //Compare each peg in answer to each peg in guess. Increment blackHints on each match
    if(peg1 === peg1A){ blackHints++; }
    if(peg2 === peg2A){ blackHints++; }
    if(peg3 === peg3A){ blackHints++; }
    if(peg4 === peg4A){ blackHints++; }
    
    //If all four pegs match, puzzle is solved. Return new state.
    if(blackHints === 4){ 
        
        currentGuess.hint1 = 'black';
        currentGuess.hint2 = 'black';
        currentGuess.hint3 = 'black';
        currentGuess.hint4 = 'black';

        return currentGuess;
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
    Object.keys(answer).forEach(function(key){ colorCount[answer[key]]++; });
    
    //Compare each peg in guess to colorCount. If peg's color is > 1 in colorCount add 1 to totalHints and decrease that color's count by 1.
    Object.keys(currentGuess).forEach(function(key){
        if( colorCount[currentGuess[key]] ){
            totalHints++;
            colorCount[currentGuess[key]]--;
        }
    });

    let whiteHints = totalHints - blackHints;
    
    //Assign proper colors to hint pegs. Any blacks first then any whites, so the answer isn't given away by order of hint pegs.
    switch(blackHints){
        case 3:
            if(whiteHints) {
                currentGuess.hint1 = 'black';
                currentGuess.hint2 = 'black';
                currentGuess.hint3 = 'black';
                currentGuess.hint4 = 'white';

                return currentGuess;
            }else {
                currentGuess.hint1 = 'black';
                currentGuess.hint2 = 'black';
                currentGuess.hint3 = 'black';
                currentGuess.hint4 = 'none';

                return currentGuess;
            }

        case 2:
            if(whiteHints === 2){
                currentGuess.hint1 = 'black';
                currentGuess.hint2 = 'black';
                currentGuess.hint3 = 'white';
                currentGuess.hint4 = 'white';

                return currentGuess;
            }else if(whiteHints === 1) {
                currentGuess.hint1 = 'black';
                currentGuess.hint2 = 'black';
                currentGuess.hint3 = 'white';
                currentGuess.hint4 = 'none';

                return currentGuess;
            }else {
                currentGuess.hint1 = 'black';
                currentGuess.hint2 = 'black';
                currentGuess.hint3 = 'none';
                currentGuess.hint4 = 'none';

                return currentGuess;
            }

        case 1:
            if(whiteHints === 3) {
                currentGuess.hint1 = 'black';
                currentGuess.hint2 = 'white';
                currentGuess.hint3 = 'white';
                currentGuess.hint4 = 'white';

                return currentGuess;
            }else if(whiteHints === 2) {
                currentGuess.hint1 = 'black';
                currentGuess.hint2 = 'white';
                currentGuess.hint3 = 'white';
                currentGuess.hint4 = 'none';

                return currentGuess;
            }else if(whiteHints === 1) {
                currentGuess.hint1 = 'black';
                currentGuess.hint2 = 'white';
                currentGuess.hint3 = 'none';
                currentGuess.hint4 = 'none';

                return currentGuess;
            }else{
                currentGuess.hint1 = 'black';
                currentGuess.hint2 = 'none';
                currentGuess.hint3 = 'none';
                currentGuess.hint4 = 'none';

                return currentGuess;
            }
        
        default:
            if(whiteHints === 4) {
                currentGuess.hint1 = 'white';
                currentGuess.hint2 = 'white';
                currentGuess.hint3 = 'white';
                currentGuess.hint4 = 'white';

                return currentGuess;
            }else if(whiteHints === 3) {
                currentGuess.hint1 = 'white';
                currentGuess.hint2 = 'white';
                currentGuess.hint3 = 'white';
                currentGuess.hint4 = 'none';

                return currentGuess;
            }else if(whiteHints === 2) {
                currentGuess.hint1 = 'white';
                currentGuess.hint2 = 'white';
                currentGuess.hint3 = 'none';
                currentGuess.hint4 = 'none';

                return currentGuess;
            }else if(whiteHints === 1) {
                currentGuess.hint1 = 'white';
                currentGuess.hint2 = 'none';
                currentGuess.hint3 = 'none';
                currentGuess.hint4 = 'none';

                return currentGuess;
            }else{
                currentGuess.hint1 = 'none';
                currentGuess.hint2 = 'none';
                currentGuess.hint3 = 'none';
                currentGuess.hint4 = 'none';

                return currentGuess;
            }
    }
};

export default createSelector(
    answerSelector,
    currentGuessSelector,
    evaluateGuess
);