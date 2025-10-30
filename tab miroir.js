const prompt = require("prompt-sync")()
let arr = [1,2,3,4,5]
let revarr = [...arr].reverse()
for (let i of revarr){
    arr.push(i)
}

console.log(arr)