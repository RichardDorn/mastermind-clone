import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { submitGuess } from '../actions/index';

class Guess extends Component {
    onSubmit(props) {
        this.props.submitGuess([props]);
        this.props.resetForm();
        this.textInput.focus();
    }
    
    render() {
        const { fields: { peg1, peg2, peg3, peg4 },handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                <button type="submit" className="btn btn-primary pull-xs-right">Submit</button>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.peg1 || values.peg1.toLowerCase() !== 'black' && values.peg1.toLowerCase() !== 'blue' 
        && values.peg1.toLowerCase() !== 'green' && values.peg1.toLowerCase() !== 'red' 
        && values.peg1.toLowerCase() !== 'white' && values.peg1.toLowerCase() !== 'yellow') {
        errors.peg1 = 'Enter a valid color';
    }

    if(!values.peg2 || values.peg2.toLowerCase() !== 'black' && values.peg2.toLowerCase() !== 'blue' 
        && values.peg2.toLowerCase() !== 'green' && values.peg2.toLowerCase() !== 'red' 
        && values.peg2.toLowerCase() !== 'white' && values.peg2.toLowerCase() !== 'yellow') {
        errors.peg2 = 'Enter a color';
    }

    if(!values.peg3 || values.peg3.toLowerCase() !== 'black' && values.peg3.toLowerCase() !== 'blue' 
        && values.peg3.toLowerCase() !== 'green' && values.peg3.toLowerCase() !== 'red' 
        && values.peg3.toLowerCase() !== 'white' && values.peg3.toLowerCase() !== 'yellow') {
        errors.peg3 = 'Enter a color';
    }

    if(!values.peg4 || values.peg4.toLowerCase() !== 'black' && values.peg4.toLowerCase() !== 'blue' 
        && values.peg4.toLowerCase() !== 'green' && values.peg4.toLowerCase() !== 'red' 
        && values.peg4.toLowerCase() !== 'white' && values.peg4.toLowerCase() !== 'yellow') {
        errors.peg4 = 'Enter a color';
    }

    return errors;
}

export default reduxForm({
    form: 'submitGuessForm',
    fields: ['peg1', 'peg2', 'peg3', 'peg4'],
    validate
}, null, { submitGuess })(Guess);