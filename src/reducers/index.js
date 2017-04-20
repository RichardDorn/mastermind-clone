import { combineReducers } from 'redux';
import GuessesReducer from './guessesReducer';
import AnswerReducer from './answerReducer';
import DifficultyReducer from './difficultyReducer';
import GameReducer from './gameReducer';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  guesses: GuessesReducer,
  answer: AnswerReducer,
  difficulty: DifficultyReducer,
  game: GameReducer,
  form: formReducer,
});

export default rootReducer;
