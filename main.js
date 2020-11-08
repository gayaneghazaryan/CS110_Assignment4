
const utils = require("./utils.js")
let A = [
    [1,2],
    [3,4],
    [5,6]
]

let B = [
    [1,2,3],
    [4,5,6]
]

let C = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// console.log(utils.matrixProduct(A,B));
// console.log(utils.sumOfMatrices(C,C));
console.log(utils.sumofEachRow(C));