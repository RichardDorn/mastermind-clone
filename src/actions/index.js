export const EVALUATE_GUESS = 'EVALUATE_GUESS';
export const GUESS_SUBMITTED = 'GUESS_SUBMITTED';
export const NEW_GAME = 'NEW_GAME';
export const SET_DIFFICULTY = 'SET_DIFFICULTY';

export function evaluateGuess(guess, answer) {
    return {
        type: EVALUATE_GUESS,
        payload: guess,
        test: answer
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