import React from 'react';
import ColorPeg from './colorPeg';
import HintPeg from './hintPeg';

const SubmittedGuess = ({ hint1, hint2, hint3, hint4, peg1, peg2, peg3, peg4 }) => {
    return (
        <div className="row">
            
            
            <div className="col-xs-2 hints">
                <div className="row">
                    <div className="col-xs-6">
                        <HintPeg color={hint1} />
                    </div>

                    <div className="col-xs-6">
                        <HintPeg color={hint2} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-6">
                        <HintPeg color={hint3} />
                    </div>
                    <div className="col-xs-6">
                        <HintPeg color={hint4} />
                    </div>
                </div>
            </div>


            <div className="col-xs-10 pegs">
                <div className="row">
                    <div className="col-xs-3">
                        <ColorPeg color={peg1} />
                    </div>
                    
                    <div className="col-xs-3">
                        <ColorPeg color={peg2} />
                    </div>
                    
                    <div className="col-xs-3">
                        <ColorPeg color={peg3} />
                    </div>
                    
                    <div className="col-xs-3">
                        <ColorPeg color={peg4} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubmittedGuess;