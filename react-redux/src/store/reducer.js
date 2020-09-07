import {
    ADD_NUMBER,
    SUB_NUMBER
} from './constants'

export default function (state, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return { ...state, counter: state.counter + action.num };
        case SUB_NUMBER:
            return { ...state, counter: state.counter - action.num }
        default:
            return state;
    }
}