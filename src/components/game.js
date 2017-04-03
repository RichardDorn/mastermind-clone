import React, { Component } from 'react';
import Guess from './guess';
import SubmittedGuesses from './submittedGuesses';

export default class Game extends Component {
  render() {
    return (
      <div>
        <SubmittedGuesses />
        <Guess />
      </div>
    );
  }
}
