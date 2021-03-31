import * as Actions from '../actions';

const initialState = {
    lang: 'en'
};

const languageReducer = (state = initialState, action) => {
    switch( action.type) {
        case Actions.LANGUAGE_LOAD: {
            return {
                ...state,
                lang: action.payload
            }
        }        
        default: {
            return state;
        }
    }
}

export default languageReducer;