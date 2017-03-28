import React, { Component } from 'react';
import { reduxForm, Field, reset } from 'redux-form';
import { submitGuess, startNewGame } from '../actions';
import MenuItem from 'material-ui/MenuItem';
import { SelectField } from 'redux-form-material-ui';
import { connect } from 'react-redux';

class Guess extends Component {
    onSubmit(props) {
        this.props.submitGuess(props);
        this.props.dispatch(reset('submitGuessForm'));
    }
    
    render() {
        const { fields: { peg1, peg2, peg3, peg4 },handleSubmit } = this.props;
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
                        onClick={ () => { this.props.startNewGame(); } } 
                        className="btn btn-link" 
                        disabled={ disableDifficulty('EASY') }>
                        Easy
                    </button>
                    
                    <button 
                        type="button" 
                        onClick={ () => { this.props.startNewGame('MEDIUM'); } } 
                        className="btn btn-link" 
                        disabled={ disableDifficulty('MEDIUM') }>
                        Medium
                    </button>
                   
                    <button
                        type="button"
                        onClick={ () => { this.props.startNewGame('HARD'); } }
                        className="btn btn-link"
                        disabled={ disableDifficulty('HARD') }>
                        Hard
                    </button>
                </div>
                
                <div className="form-group row">
                    <div className="col-xs-3">
                        
                        <Field name="peg1" component={SelectField} hintText="Select a color">
                            <MenuItem value="black" primaryText="Black"/>
                            <MenuItem value="blue" primaryText="Blue"/>
                            { this.props.difficulty === 'MEDIUM' && <MenuItem value="brown" primaryText="Brown"/> }
                            { this.props.difficulty === 'HARD' && <MenuItem value="brown" primaryText="Brown"/> }
                            <MenuItem value="green" primaryText="Green"/>
                            { this.props.difficulty === 'HARD' && <MenuItem value="pink" primaryText="Pink"/> }
                            <MenuItem value="red" primaryText="Red"/>
                            <MenuItem value="white" primaryText="White"/>
                            <MenuItem value="yellow" primaryText="Yellow"/>
                        </Field>
                        
                    </div>
                    
                    <div className="col-xs-3">
                        <Field name="peg2" component={SelectField} hintText="Select a color">
                            <MenuItem value="black" primaryText="Black"/>
                            <MenuItem value="blue" primaryText="Blue"/>
                            { this.props.difficulty === 'MEDIUM' && <MenuItem value="brown" primaryText="Brown"/> }
                            { this.props.difficulty === 'HARD' && <MenuItem value="brown" primaryText="Brown"/> }
                            <MenuItem value="green" primaryText="Green"/>
                            { this.props.difficulty === 'HARD' && <MenuItem value="pink" primaryText="Pink"/> }
                            <MenuItem value="red" primaryText="Red"/>
                            <MenuItem value="white" primaryText="White"/>
                            <MenuItem value="yellow" primaryText="Yellow"/>
                        </Field>
                        
                    </div>
                    
                    <div className="col-xs-3">
                        <Field name="peg3" component={SelectField} hintText="Select a color">
                            <MenuItem value="black" primaryText="Black"/>
                            <MenuItem value="blue" primaryText="Blue"/>
                            { this.props.difficulty === 'MEDIUM' && <MenuItem value="brown" primaryText="Brown"/> }
                            { this.props.difficulty === 'HARD' && <MenuItem value="brown" primaryText="Brown"/> }
                            <MenuItem value="green" primaryText="Green"/>
                            { this.props.difficulty === 'HARD' && <MenuItem value="pink" primaryText="Pink"/> }
                            <MenuItem value="red" primaryText="Red"/>
                            <MenuItem value="white" primaryText="White"/>
                            <MenuItem value="yellow" primaryText="Yellow"/>
                        </Field>
                        
                    </div>
                    
                    <div className="col-xs-3">
                        <Field name="peg4" component={SelectField} hintText="Select a color">
                            <MenuItem value="black" primaryText="Black"/>
                            <MenuItem value="blue" primaryText="Blue"/>
                            { this.props.difficulty === 'MEDIUM' && <MenuItem value="brown" primaryText="Brown"/> }
                            { this.props.difficulty === 'HARD' && <MenuItem value="brown" primaryText="Brown"/> }
                            <MenuItem value="green" primaryText="Green"/>
                            { this.props.difficulty === 'HARD' && <MenuItem value="pink" primaryText="Pink"/> }
                            <MenuItem value="red" primaryText="Red"/>
                            <MenuItem value="white" primaryText="White"/>
                            <MenuItem value="yellow" primaryText="Yellow"/>
                        </Field>
                        
                    </div>
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

    if(!values.peg1) {
        errors.peg1 = 'Enter a color';
    }

    if(!values.peg2) {
        errors.peg2 = 'Enter a color';
    }

    if(!values.peg3) {
        errors.peg3 = 'Enter a color';
    }

    if(!values.peg4) {
        errors.peg4 = 'Enter a color';
    }

    return errors;
}

function mapStateToProps(state) {
    return {
        difficulty: state.guesses.difficulty,
    };
}

Guess = reduxForm({
    form: 'submitGuessForm',
    fields: ['peg1', 'peg2', 'peg3', 'peg4'],
    validate
})(Guess);

Guess = connect(mapStateToProps, { submitGuess, startNewGame })(Guess);

export default Guess;

