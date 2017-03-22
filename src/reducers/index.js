import { combineReducers } from 'redux';
import GuessesReducer from './guessesReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  guesses: GuessesReducer,
  form: formReducer,
});

export default rootReducer;
