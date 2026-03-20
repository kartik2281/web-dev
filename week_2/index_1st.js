function add(num1 , num2){
    return num1 + num2 
}

let ans = add(2,3)
console.log(ans)

//let ans = add("2" , 3)
//here the ans would be 23 because string hai 2 
//to make this work we use return parseInt(num1) + parseInt(num2) //this thing works 
//return Number(num1) + Number(num2) // this also works

function printSum(num){
    let answer = 0 ;
    for(let i = 1 ; i <= num ; i++){
        answer = answer + i ;
    }
    return answer ;
}
let answer = printSum(10)
console.log(answer);

//HW : try to create a promisied version of - setTimeout , fetch , fs.readfile
//Synchronous Code - Basically which is executed line by line by a single thread while mantaning the order
//each task or line of code waits for its predecessor to complete and then run

