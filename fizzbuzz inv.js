const prompt = require("prompt-sync")()
let n = Number(prompt("entrer le nombre: "))
for (let i = 1; i <= n; i++ ){
    if (i % 3 === 0 && i % 5 === 0){
    console.log("techlead")
}else if (i % 5 === 0){
    console.log("lead")
}else if(i % 3 === 0){
    console.log("tech")
}else {
    console.log(i)
}
}

