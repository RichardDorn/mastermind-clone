import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startNewGame } from '../actions';
import { bindActionCreators } from 'redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  componentWillMount() {
    this.props.startNewGame();
  }
  
  render() {
    console.log(this.props.answer);
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        answer: state.guesses.answer,
    };
}

export default connect(mapStateToProps, { startNewGame })(App);