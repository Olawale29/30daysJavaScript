function fullName(){
    console.log("Oyegunle Emmanuel Olawale");
}
fullName();



function fullNames(){
    let firstName = "Oyegunle";
    let lastName = "Emmanuel";
    let names = `${firstName} ${lastName}`
    console.log(names);
}
fullNames()

function addName(){
    let a = 12;
    let b = 20;
    let sum = `${a + b}`;
    console.log(sum);
}
addName();

const area = function(l,b){
    return l * b
}
console.log(area(4,6));
// const printFullName = (firstName, lastName) => {
//     return `${firstName} ${lastName}`
//   }
  
//   console.log(printFullName('Asabeneh', 'Yetayeh'))

const perimeter = (length, breadth) =>{
    return 2 * (length * breadth)
}
console.log(perimeter(4, 20));

const volumeOfPrism = (length, width, height) => length*width*height;
console.log(volumeOfPrism(2,5,6));


const areaOfCircle = (pi, r) => pi * r * r;
console.log(Math.floor(areaOfCircle(3.142, 4)));

const circumOfCircle = (pi, r) => 2 * pi * r;
console.log(Math.floor(circumOfCircle(3.142, 7)));

const density = (mass, volume) =>{
    return mass/volume;
}
console.log(Math.floor(density(20, 5)));

const convertCelsiusToFeherenheit =(degCel) => (degCel * 1.8) +32
console.log(convertCelsiusToFeherenheit(24));

// let weight = Number(prompt("Enter your weight"));
// let height = Number(prompt("Enter your height"));

// const bmi = (weight, height) =>{
//     return Math.floor(weight/(height * height))
// }

// if(bmi(weight, height) < 18.5){
//     console.log(`The Person's bmi is ${bmi(weight, height)} which is underweight`);
// }else if(bmi(weight, height) >= 18.5 && bmi(weight, height) <= 24.9){
//     console.log(`The Person's bmi is ${bmi(weight, height)} which is normal`);
// }else if(bmi(weight, height) >= 25 && bmi(weight, height) <=29.9){
//     console.log(`The Person's bmi is ${bmi(weight, height)} which is overweight`);
// }else if(bmi(weight, height) >=30){
//     console.log(`The Person's bmi is ${bmi(weight, height)} is obese`);
// }

//83kg
//1.77
//spring-> March, April, May
// summer->June, July, August
// autumn ->September, October, November
// winter -> December, January, Febrauary

// const month = prompt("Whats the month: ").toLowerCase()
// const checkSeason = (month) =>{
//     if(month === "march" || month === "april" || month === "may"){
//         return "spring";
//     }else if(month === "june" || month ==="july" || month === "august"){
//         return "summer"
//     }else if(month === "september" || month === "october" || month === "november"){
//         return "autumn"
//     }else if (month === "december" || month === "january" || month === "febrauary"){
//         return "winter"
//     }else{
//         return "The month you gave is not an actual month"
//     }

    
// }
// console.log(checkSeason(month));


const findMax = (a, b, c) => {
    let max = a
    if(b > max){
        max = b;
    }
    if(c > max){
        max = c;
    }
    return max;    
}
console.log(findMax(3, 10, 7));


