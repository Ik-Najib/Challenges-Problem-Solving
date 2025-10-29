const prompt = require("prompt-sync")()
let arr = [-1,8,7,-1,2,4,5]
sum = 0
let stop = false 

arr.forEach(function(num){
    if (!stop){
        if (num < 0){
            stop = true
        }else{
            sum += num
        }
    }
})
console.log(sum)