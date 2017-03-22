import React, { Component } from 'react';
import Guess from './guess';
import SubmittedGuesses from './submittedGuesses';

export default class Home extends Component {
  render() {
    return (
      <div>
        <SubmittedGuesses />
        <Guess />
      </div>
    );
  }
}
