import { NEW_GAME } from '../actions/index';

const INITIAL_STATE = { answer: [] };

export default function(state =INITIAL_STATE, action) {
    switch(action.type) {
        case NEW_GAME:
            let colorChoices = [
                'black',
                'blue',
                'green',
                'red',
                'white',
                'yellow',
            ];

            let colors = [
                    colorChoices[Math.floor(Math.random() * colorChoices.length)],
                    colorChoices[Math.floor(Math.random() * colorChoices.length)],
                    colorChoices[Math.floor(Math.random() * colorChoices.length)],
                    colorChoices[Math.floor(Math.random() * colorChoices.length)]
                    ];
            console.log('Colors: ' + colors);
            return { ...state, answer: colors };

        default:
            return state;
    }
}