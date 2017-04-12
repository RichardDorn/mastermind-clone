import React, { Component } from 'react';
import { reduxForm, Field, reset } from 'redux-form';
import { guessEvaluated, submitGuess, startNewGame, setDifficulty } from '../actions';
import MenuItem from 'material-ui/MenuItem';
import { SelectField } from 'redux-form-material-ui';
import { connect } from 'react-redux';
import GuessesSelector from '../selectors/guessesSelector';
import _ from 'lodash';
import Modal from './modal';
import {browserHistory} from 'react-router';

const FIELDS = {
    peg1: {
        type: SelectField,
        label: 'peg1'
    },
    peg2: {
        type: SelectField,
        label: 'peg2'
    },
    peg3: {
        type: SelectField,
        label: 'peg3'
    },
    peg4: {
        type: SelectField,
        label: 'peg4'
    },
};

class Guess extends Component {

    onSubmit(props) {
        this.props.submitGuess(props);
        let that = this;
        setTimeout( () => {
            that.props.guessEvaluated(that.props.evaluatedGuess);
        }, 100);
        
        this.props.dispatch(reset('submitGuessForm'));
    }

    renderField(fieldConfig) {
        return (
            <div key={fieldConfig.label} className="col-xs-3">
                <Field name={fieldConfig.label} component={fieldConfig.type} hintText="Select a color">
                    <MenuItem value="black" primaryText="Black"/>
                    <MenuItem value="blue" primaryText="Blue"/>
                    { this.props.difficulty === 'HARD' && <MenuItem value="brown" primaryText="Brown"/> }
                    <MenuItem value="green" primaryText="Green"/>
                    { this.props.difficulty === 'MEDIUM' && <MenuItem value="pink" primaryText="Pink"/> }
                    { this.props.difficulty === 'HARD' && <MenuItem value="pink" primaryText="Pink"/> }
                    <MenuItem value="red" primaryText="Red"/>
                    <MenuItem value="white" primaryText="White"/>
                    <MenuItem value="yellow" primaryText="Yellow"/>
                </Field>
            </div>
        );
    }

    quitGame() {
        browserHistory.push('/');
    }
    
    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                
                {!this.props.solved &&
                <div>
                    <div className="form-group row">
                        { _.map(FIELDS, this.renderField.bind(this)) }
                    </div>
                    
                    <div className="form-group row pull-xs-right">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="button" onClick={ this.quitGame } className="btn btn-danger">Quit</button>
                    </div>
                </div>}

                {this.props.solved && 
                <Modal>
                    <p>Difficulty: {this.props.difficulty}</p>
                    <p>Total Guesses: {this.props.totalGuesses}</p>
                    <button type="button" onClick={ this.quitGame } className="btn btn-danger">Quit</button>
                    <button type="button" onClick={ () => { this.props.startNewGame(this.props.difficulty); } } className="btn btn-primary">New Game</button>
                </Modal>}
            </form>
        );
    }
}


function validate(values) {
    const errors = {};

    _.each(FIELDS, (type, field) => {
        if(!values[field]) {
            errors[field] = `Enter a color for ${field}`;
        }
    });

    return errors;
}

function mapStateToProps(state) {
    return {
        solved: state.answer.isSolved,
        difficulty: state.difficulty.difficulty,
        totalGuesses: state.guesses.all.length,
        evaluatedGuess: GuessesSelector(state),
    };
}

Guess = reduxForm({
    form: 'submitGuessForm',
    fields: _.keys(FIELDS),
    validate
})(Guess);

Guess = connect(mapStateToProps, { guessEvaluated, submitGuess, startNewGame, setDifficulty })(Guess);

export default Guess;

