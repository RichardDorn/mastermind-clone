import React, { Component } from 'react';
import { reduxForm, Field, reset } from 'redux-form';
import { evaluateGuess, submitGuess, startNewGame, setDifficulty } from '../actions';
import MenuItem from 'material-ui/MenuItem';
import { SelectField } from 'redux-form-material-ui';
import { connect } from 'react-redux';
import _ from 'lodash';

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
        this.props.evaluateGuess(props, this.props.answer);
        let that = this;
        setTimeout( () => {
            that.props.submitGuess(that.props.currentGuess);
        }, 100);
        
        this.props.dispatch(reset('submitGuessForm'));
    }

    onChangeDifficulty(e) {
        this.props.setDifficulty(e.target.value);
        //Set 100ms delay before calling startNewGame so this.props.difficulty has time to update.
        //Otherwise the new game will be using color options from the previous difficulty setting.
        let that = this;
        setTimeout( () => {
            that.props.startNewGame(that.props.difficulty);
        }, 100);
        
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
    
    render() {
        const { handleSubmit } = this.props;
        let difficultyLevel = this.props.difficulty;
        function disableDifficulty(difficulty) {
            if(difficultyLevel === difficulty) {
                return 'disabled';
            }else { return ''; }
        };

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="form-group row">
                    <button 
                        type="button"
                        value="EASY"
                        onClick={ this.onChangeDifficulty.bind(this) } 
                        className="btn btn-link" 
                        disabled={ disableDifficulty('EASY') }>
                        Easy
                    </button>
                    
                    <button 
                        type="button"
                        value="MEDIUM"
                        onClick={ this.onChangeDifficulty.bind(this) } 
                        className="btn btn-link" 
                        disabled={ disableDifficulty('MEDIUM') }>
                        Medium
                    </button>
                   
                    <button
                        type="button"
                        value="HARD"
                        onClick={ this.onChangeDifficulty.bind(this) }
                        className="btn btn-link"
                        disabled={ disableDifficulty('HARD') }>
                        Hard
                    </button>
                </div>
                
                <div className="form-group row">
                    { _.map(FIELDS, this.renderField.bind(this)) }
                </div>
                
                <div className="form-group row pull-xs-right">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" onClick={ () => { this.props.startNewGame(this.props.difficulty); } } className="btn btn-danger">New Game</button>
                </div>
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
        difficulty: state.difficulty.difficulty,
        currentGuess: state.evaluation.currentGuess,
        answer: state.answer.answer,
    };
}

Guess = reduxForm({
    form: 'submitGuessForm',
    fields: _.keys(FIELDS),
    validate
})(Guess);

Guess = connect(mapStateToProps, { evaluateGuess, submitGuess, startNewGame, setDifficulty })(Guess);

export default Guess;

