export const GUESS_EVALUATED = 'GUESS_EVALUATED';
export const GUESS_SUBMITTED = 'GUESS_SUBMITTED';
export const NEW_GAME = 'NEW_GAME';
export const SET_DIFFICULTY = 'SET_DIFFICULTY';
export const SET_GAME_TYPE = 'SET_GAME_TYPE';
export const EVALUATE_SCORE = 'EVALUATE_SCORE';
export const GAME_OVER = 'GAME_OVER';

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

export function setGameType(type) {
    return {
        type: SET_GAME_TYPE,
        payload: type
    };
}

export function evaluateScore(scoreSelector) {
    return {
        type: EVALUATE_SCORE,
        payload: scoreSelector
    }
}

export function gameOver() {
    return {
        type: GAME_OVER,
    }
}