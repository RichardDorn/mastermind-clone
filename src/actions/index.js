export const GUESS_SUBMITTED = 'GUESS_SUBMITTED';
export const NEW_GAME = 'NEW_GAME';

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