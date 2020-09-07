import {
    ADD_NUMBER,
    SUB_NUMBER
} from './constants.js'

const defaultState = {
    counter: 0
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return { ...state, counter: state.counter + action.num };
        case SUB_NUMBER:
            return { ...state, counter: state.counter - action.num }
        default:
            return state;
    }
}