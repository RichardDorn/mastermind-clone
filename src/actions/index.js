export const GUESS_SUBMITTED = 'GUESS_SUBMITTED';
export const NEW_GAME = 'NEW_GAME';

export function submitGuess(guess) {
    //selectBook is an action creator, it needs to return an action, an object with a type property.
    return {
        type: GUESS_SUBMITTED,
        payload: guess
    };
}

export function startNewGame() {
    return {
        type: NEW_GAME,
    };
}