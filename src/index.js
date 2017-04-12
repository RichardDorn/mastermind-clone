import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import reducers from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/app';
import Home from './components/home';
import Game from './components/game';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Home} />
        </Route>
        <Route path="game" component={Game} />
      </Router>
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('.container'));
