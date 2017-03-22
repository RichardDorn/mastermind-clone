import { combineReducers } from 'redux';
import GuessesReducer from './guessesReducer';
import AnswerReducer from './answerReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  guesses: GuessesReducer,
  answer: AnswerReducer,
  form: formReducer,
});

export default rootReducer;
