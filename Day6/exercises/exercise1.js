for(let i = 0; i<=10; i++){
    console.log(i);
}
let i = 0;
while(i <= 10){
    console.log(i);
    i++;
}
let  x = 0;
do {
    console.log(x);
    x++;
}while(x<=10);

for(let num =10; num>=0; num--){
    console.log(num);
}

let num = 10;
while(num >=0){
    console.log(num);
    num--;
}

let number = 10;
do{
    console.log(number);
    number--;
}while(number>=0);

let n = 10
for(let i = 0; i<=n; i++){
    console.log(i);
}

for(let i = 1; i <= 7; i++){
    let line = ''
    for(let j=i; j<=i; j++){
        line+='#'
    }
    console.log(line);
}
for(let i = 0; i <= 10; i++){
   let ans = i * i
   console.log(`${i} * ${i} = ${ans}`);
}

for(let i = 0; i<=10; i++){
    let isquare = i * i;
    let icube = i * i * i
    console.log(`${i} ${isquare} ${icube}`);
}
for(let i = 0; i<=100; i++){
    if(i%2 == 0){
        console.log(i);
    }
}
for(let i = 0; i<=100; i++){
    if(i%2 !=0){
        console.log(i);
    }
}

//9
for(let i = 2; i<=100; i++){
    let isPrime = true

    for(let j = 2; j< i; j++){
        if(i%j === 0){
            isPrime = false;
            break
        }
    }
    if(isPrime){
        console.log(i);
    }
    



}
let sum = 0
for(let i = 0; i<=100; i++){
    sum+=i
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

let addEven = 0
let addOdd = 0
for(let i = 0; i<=100; i++){
    if(i%2 == 0){
        addEven+=i      
    }else if(i%2 !=0){
        addOdd +=i
        
    }   
}
console.log(`The sum of all evens from 0 to 100 is ${addEven}. And the sum of all odds from 0 to 100 is ${addOdd}.`);
let arr= []
arr.push(addEven)
arr.push(addOdd)
console.log(arr);

for(let i=0; i<5; i++){
    let number = Math.floor(Math.random() * 10)+1
    console.log(number);
}
let nums = []
for(let i = 0; i<5; i++){
    let randomNum;
    do{
        randomNum = Math.floor(Math.random() *10) +1;
    }while(nums.includes(randomNum));
    nums.push(randomNum)
}
console.log(nums);

let characters = 'ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let randomString = '';

for(let i = 0; i<6; i++){
    let randomIndex = Math.floor(Math.random() * characters.length);
    randomString +=characters.charAt(randomIndex);
} 
console.log(randomString);









