import { createSelector } from 'reselect';

const gameSelector = state => state.game.gameType;
const solvedSelector = state => state.answer.isSolved;
const scoreSelector = state => state.game.score;

const evaluateScore = (gameType, solved, score) => {
    if(gameType === 'FULL') {
        if(solved) {
            score++;
            return score;
        }else {
            return score;
        }
    }else {
        return score;
    }
}

export default createSelector(
    gameSelector,
    solvedSelector,
    scoreSelector,
    evaluateScore
);