const solveLinEquation = (a, b, c, x, y) => {
  return a * x + b * y + c;
};
console.log(solveLinEquation(2, 3, -5, 1, 1));

//quadratic equation
//ax2 +bx + c =0
// x = -b+ Math.sqrt(-b-4ac)/2a
// const solvQuadEquation = (a, b, c) =>{
//     const x1 = -b + Math.sqrt(b ** 2 - 4 * a * c)/2 * a;
//     const x2 = -b - Math.sqrt(b ** 2 - 4 * a * c)/2 * a
//     return [x1,x2];
// }
// console.log(solvQuadEquation(1,7,12));

const solvQuadEquation = (a, b, c) => {
  const dis = b ** 2 - 4 * a * c;
  const x1 = ((-b + Math.sqrt(dis)) / 2) * a;
  const x2 = ((-b - Math.sqrt(dis)) / 2) * a;

  return [x1, x2];
};
console.log(solvQuadEquation(1, 7, 12));

const printArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    return arr;
  }
};

console.log(printArray([1, 2, 3, 4, 5]));
// month, day, year
const showDateTime = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = (now.getMonth() + 1 < 10 ? "0" : "") + (now.getMonth() + 1);
  const day = (now.getDate() < 10 ? "0" : "") + now.getDate();
  const hours = (now.getHours() < 10 ? "0" : "") + now.getHours();
  const minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();

  const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
  console.log(formattedDateTime);
};

showDateTime();

const swapValues = (x, y) => {
  let z = y;
  let c = x;
  return [z, c];
};
console.log(swapValues(4, 3));

const reverseArr = (arr) => {
  const revArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i]);
  }
  return revArr;
};
console.log(reverseArr([5, 3, 4, 6, 2]));

const capitalizeArr = (arr) => {
  const capitalizedArr = [];
  for (let i = 0; i < arr.length; i++) {
    capitalizedArr.push(arr[i].toUpperCase());
  }
  return capitalizedArr;
};
console.log(capitalizeArr(["nigeria,lagos"]));

const addItem = (item, originalArr) => {
  const originalArrs = [...originalArr];
  originalArrs.push(item);

  return originalArrs;
};
console.log(addItem(4, [2, 5, 6, 7]));

const removeItem = (index, array) => {
  const newArrs = [...array];
  newArrs.splice(index, 1);

  return newArrs;
};
console.log(removeItem(2, [2, 5, 6, 7, 8, 9, 0]));

const sumOfNumbers = (numbers) => {
  if (Number.isInteger(numbers) && numbers > 0) {
    const sum = (numbers / 2) * (1 + numbers);
    return sum;
  } else {
    return "It is not a positive integer";
  }
};
console.log(sumOfNumbers(10));

const sumOfOddNum = (num) => {
  if (Number.isInteger(num) && num > 0 && num % 2 != 0) {
    const sums = num ** 2;
    return sums;
  } else {
    return "It is not an odd number";
  }
};
console.log(sumOfOddNum(23));

const sumofEvenNum = (num) => {
  if (Number.isInteger(num) && num > 0 && num % 2 == 0) {
    const sum = num * (num + 1);
    return sum;
  } else {
    return "It is not an even number";
  }
};
console.log(sumofEvenNum(8));




const evenAndOdd = (num) => {
  let evenCount = 0;
  let oddCount = 0;
  for(let i=0; i <= num; i++) {
    if (i % 2 == 0) {
      evenCount++;
    } else {
      oddCount++;
    }

  }
  return `The number of even is ${evenCount}
The number of odd is ${oddCount}`
};
console.log(evenAndOdd(100));

// const sum = (a,b,c)  => {
//     const sum = a + b + c
//     return sum
// }
// console.log(sum(1,2,3));


const randomUserIp = (min, max) =>{
   return Math.floor(Math.random() * (max - min + 1) + min);
}
const randomUser = []
for(let i = 0; i<4; i++){
    randomUser.push(randomUserIp(0,255))   
} 
let number = randomUser.toString()
let mystring = number.replace(/,/g, '.')
console.log(mystring);


function randomHexaNumberGenerator()
{
    let hexaNumber = '#';
    let hexaNumberList = [ '#', 'a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    let hexaDigit = '';

    while (hexaNumber.length < 7)
    {
        hexaDigit = Math.random().toString(36).substr(2, 1);
        if (hexaNumberList.includes(hexaDigit))
        {
            hexaNumber += `${hexaDigit}`;
        }
    }
    return (hexaNumber);
}
console.log(randomHexaNumberGenerator());

function userIdGenerator()
{
    let userId = '';

    while (userId.length < 7)
    {
        userId += Math.random().toString(36).substring(2, 3);
    }
    return (userId);
}
console.log(userIdGenerator());



//0123456789ABCDEF

// const randomMacAddress = (ip) =>{
//   let iplength = ip.length
//   return Math.floor(Math.random() * iplength)
// }
// let result = ""
// for(i=0; i<6; i++){
//   result += randomMacAddress("0123456789ABCDEF")

// }
// console.log(result);

// let arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

// let count = 12;
// let i = 1;

// let mac = ""

// while(i<=count){
//   //generate a random number
//   let rand = Math.random(0, arr.length);
//   if(i % 2 != 0 && i != 1){
//     mac += "-";
//   }
//   mac += arr[rand];
//   return mac
// }
// console.log(mac);




