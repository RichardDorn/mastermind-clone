import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDifficulty, startNewGame } from '../actions';
import { bindActionCreators } from 'redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  componentWillMount() {
    this.props.setDifficulty('EASY');
    this.props.startNewGame( this.props.difficulty );
  }

  shouldComponentUpdate(nextProps) {
    if( this.props.answer !== nextProps.answer ) {
      return true;
    }else {
      return false;
    }
  }
  
  render() {
    console.log(this.props.answer);
    console.log('Difficulty: ' + this.props.difficulty);
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        answer: state.answer.answer,
        difficulty: state.difficulty.difficulty,
    };
}

export default connect(mapStateToProps, { setDifficulty, startNewGame })(App);