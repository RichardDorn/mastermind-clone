export const GUESS_EVALUATED = 'GUESS_EVALUATED';
export const GUESS_SUBMITTED = 'GUESS_SUBMITTED';
export const NEW_GAME = 'NEW_GAME';
export const SET_DIFFICULTY = 'SET_DIFFICULTY';

export function guessEvaluated(evaluatedGuess) {
    return {
        type: GUESS_EVALUATED,
        payload: evaluatedGuess
    };
}

export function setDifficulty(difficulty) {
    return {
        type: SET_DIFFICULTY,
        payload: difficulty
    };
}

export function submitGuess(guess) {
    return {
        type: GUESS_SUBMITTED,
        payload: guess
    };
}

export function startNewGame(difficulty) {
    return {
        type: NEW_GAME,
        payload: difficulty
    };
}