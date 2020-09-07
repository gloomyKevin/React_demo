import {
    ADD_NUMBER,
    INCREMENT
} from './constants'

export function addAction(num) {
    return {
        type: ADD_NUMBER,
        num
    }
}

export function incrementAction(num) {
    return {
        type: INCREMENT,
        num
    }
}