const prompt = require("prompt-sync")()
let n = Number(prompt("entrer un nombre: "))
let x = 1
let y = 1
for (let i = 2; i <= n; i++){
    let steps = x + y
    y = x
    x = steps
}

console.log(x)