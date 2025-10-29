const prompt = require("prompt-sync")()
let arr = [1,1,1,2,3,4,2,1,4,5]
const unique = [...new Set(arr)]
console.log(unique)