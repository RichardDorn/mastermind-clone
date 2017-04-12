import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { startNewGame, setDifficulty } from '../actions';
import {Link} from 'react-router';

const DIFFICULTIES = [ 'EASY', 'MEDIUM', 'HARD' ];

class Home extends Component {
  
  onChangeDifficulty(e) {
      this.props.setDifficulty(e.target.value);
      //Set 100ms delay before calling startNewGame so this.props.difficulty has time to update.
      //Otherwise the new game will be using color options from the previous difficulty setting.
      let that = this;
      setTimeout( () => {
          that.props.startNewGame(that.props.difficulty);
      }, 100);
      
  }

  renderDiffButton(diff) {
      let difficultyLevel = this.props.difficulty;
      function disableDifficulty(difficulty) {
          if(difficultyLevel === difficulty) {
              return 'disabled';
          }else { return ''; }
      };

      return (
          <button 
              key={diff}
              type="button"
              value={diff}
              onClick={ this.onChangeDifficulty.bind(this) } 
              className="btn btn-link" 
              disabled={ disableDifficulty(diff) } >
              {diff}
          </button>
      );
  }
  
  render() {
    return (
      <div>
        <div className="row">
            { _.map(DIFFICULTIES, this.renderDiffButton.bind(this)) }
        </div>

        <Link to={'/game'} >
        <button>
          quick play
        </button>
        </Link>

      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        difficulty: state.difficulty.difficulty,
    };
}

Home = connect(mapStateToProps, { startNewGame, setDifficulty })(Home);

export default Home;