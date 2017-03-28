import React, {Component} from 'react';
import { connect } from 'react-redux';
import SubmittedGuess from './submittedGuess';

class SubmittedGuesses extends Component {
    renderList() {
        if(this.props.guesses.length > 0){
            let reverse = this.props.guesses.slice().reverse();
            return reverse.map((guess) => {
                return (
                    <li 
                        key={this.props.guesses.indexOf(guess)}
                        className="list-group-item" >
                        <SubmittedGuess
                            hint1={guess.hint1}
                            hint2={guess.hint2}
                            hint3={guess.hint3}
                            hint4={guess.hint4}
                            peg1={guess.peg1}
                            peg2={guess.peg2}
                            peg3={guess.peg3}
                            peg4={guess.peg4}/>
                    </li>
                );
            });
        }
    }
    
    render() {
        return (
            <ul className="list-inline">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        guesses: state.guesses.all,
        solved: state.guesses.isSolved
    };
}

export default connect(mapStateToProps)(SubmittedGuesses);