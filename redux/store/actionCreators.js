// export function(num) {
//     return {
//         type: "ADD_NUMBER",
//         num
//     }
// }
import {
    ADD_NUMBER,
    SUB_NUMBER
} from './constants.js'

export const addAction = num => {
    return {
        type: ADD_NUMBER,
        num
    }
}

export const subAction = num => ({
    SUB_NUMBER,
    num
})