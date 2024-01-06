let user = parseInt(prompt("Enter your age"))
if(user > 18){
    console.log("You ar old enough to drive");
}else{
    console.log(`Wait for another ${18 - user} years`);
}

let myAge = 23
let yourAge = parseInt(prompt("Enter your age: "))

if(yourAge > myAge){
    console.log(`You are ${yourAge - myAge} years older than me`);
}else{
    console.log(`Im ${myAge -yourAge}  years older than you`);
}

let a = 4
let b = 3
if(a > b){
    console.log("a is greater than b");
}else{
    console.log("a is less than b");
}

a> b
? console.log("a is greater than b")
: console.log("b is less than b");

let number = parseInt(prompt("Enter a number: "))
if(number % 2 && number == 0){
    console.log(`${number} is an even number`);
}else{
    console.log(`${number} is an odd number`);
}

