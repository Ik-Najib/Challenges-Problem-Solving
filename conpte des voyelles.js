const prompt = require("prompt-sync")()
let mot = "HELLO"
let count = 0

 arr = mot.toLowerCase().split('')
for (let i of arr){
if (i == "a" || i == "e" || i == "o" || i == "i" || i == "u" ){
    count++
}
}
console.log(count)