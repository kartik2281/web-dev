const fs = require('fs') ;
//a module given by node js which contains the functions

function print(err , data){
    console.log(data);
}
fs.readFile("a.txt" , "utf-8" , print);
console.log(8)
//console log just check krne ke lie lagaya tah
//readFile can take three arguments , 2 toh vai same as readfileSync and it can also take a callback 
//in that callback error and the data is there jis position mei maine likha hai phele err hai fir data
//normally variable mei dalke bhi print karvaskte but this is better to explain asynchronous code


const data = fs.readFileSync('./a.txt', 'utf-8');
console.log(data) ;

//suppose if there is b.txt
// const data2 = fs.readFileSync('./b.txt' , 'utf-8');
// console.log(data2)

//now these 2 pieces of code will run synchronously as readfilesync is a synchronous piece of code
//first thread will go try to read a.txt , print it and then will go again try to read b.txt and then print
//so instead of readFileSync , we use readFile , which is basically a async version which runs concurrently

//here now reafFile is a asynchronous piece of code so it means that , it will be passed to web apis where it will run
//then it will be passed to the callback queues and under the monitoring of the event loop
//when the event loop sees that the function queue is empty and thread is free it will shift this in function queue and 
//will get executed , this basically is the explanation of how javascript handles asynchronous code
//toh idhar readfile ko chorke everything will be executed first and then ultimately it will get executed

function add(a , b){
    return a + b ;
}

function subtract(a , b){
    return a - b ;
}

function multiply( a , b){
    return a * b ;
}

function takeArg(a , b , c){
    return c(a , b);
}

console.log(takeArg(2 , 3 , multiply))

//this is basically passing functional arguments , here we are passing arguments to a function 
//and that function basically decides which function to call based on the arguments


