import {
    ADD_NUMBER,
    INCREMENT
} from './constants.js'

const defaultState = {
    counter: 0
}

function reducer(state, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case ADD_NUMBER:
            return { ...state, counter: state.counter + action.num }
        default:
            return state;
    }
}

export default reducer;