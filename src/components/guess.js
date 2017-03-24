import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { submitGuess, startNewGame } from '../actions';

class Guess extends Component {
    onSubmit(props) {
        this.props.submitGuess(props);
        this.props.resetForm();
        this.textInput.focus();
    }
    
    render() {
        const { fields: { peg1, peg2, peg3, peg4 },handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="form-group row">
                    <button type="button" onClick={ () => { this.props.startNewGame(); } } className="btn btn-link">Easy</button>
                    <button type="button" onClick={ () => { this.props.startNewGame('MEDIUM'); } } className="btn btn-link">Medium</button>
                    <button type="button" onClick={ () => { this.props.startNewGame('HARD'); } } className="btn btn-link">Hard</button>
                </div>
                <div className="form-group row">
                    <div className="col-xs-3">
                    <input ref={(input) => { this.textInput = input; }} type="text" className="form-control" {...peg1}/>
                    <div className="text-help">
                        {peg1.touched ? peg1.error : ''}
                    </div>
                    </div>
                    <div className="col-xs-3">
                    <input type="text" className="form-control" {...peg2}/>
                    <div className="text-help">
                        {peg2.touched ? peg2.error : ''}
                    </div>
                    </div>
                    <div className="col-xs-3">
                    <input type="text" className="form-control" {...peg3}/>
                    <div className="text-help">
                        {peg3.touched ? peg3.error : ''}
                    </div>
                    </div>
                    <div className="col-xs-3">
                    <input type="text" className="form-control" {...peg4}/>
                    <div className="text-help">
                        {peg4.touched ? peg4.error : ''}
                    </div>
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

export default reduxForm({
    form: 'submitGuessForm',
    fields: ['peg1', 'peg2', 'peg3', 'peg4'],
    validate
}, (mapStateToProps), { submitGuess, startNewGame })(Guess);