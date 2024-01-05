let firstName = 'Oyegunle'
let LastName = 'Emmanuel'
let Country = 'Nigeria'
let city = 'Lagos'
let age = 23
let isMarried = false
let Year = 2000

console.log(typeof firstName);
console.log(typeof LastName);
console.log(typeof Country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof Year);

let string = '10'
let number = 10
console.log(string === number);

let int = '9.8'
let integer = parseInt(int)
console.log(integer === number);

let isTruth = true;
let num = 49
let txt = 'Welcome to 30daysJavascript Challenge'
console.log(isTruth, num, txt);

let isFalse = false
let isZeroValue = 0
let isempty = ''
console.log(isFalse, isZeroValue, isempty);

console.log(4>3); //true
console.log(4>=3); //true
console.log(4<3); // false
console.log(4<=3); // false
console.log(4==4);// true
console.log(4===4); //true
console.log(4!=4); // false
console.log(4!==4);//false
console.log(4!='4');//false
console.log(4 == '4');//true
console.log(4 === '4');//false

let python  = 'python'
let jargon = 'jargon'
let python_length = python.length
let jargon_length = jargon.length
console.log(python.length > jargon.length);//false


console.log(4>3 && 10< 12); //true
console.log(4>3 && 10>12); // false
console.log(4>3 || 10 < 12);// true
console.log(4>3 || 10> 12);// true
console.log(4>3); // true
console.log(4<3); // false
console.log(!(false)); // true
console.log(!(4>3 && 10 < 12));//false
console.log(!(4>3 && 10>12)); //true
console.log(4=== '4');//false
console.log(python.includes('on') && jargon.includes('on'));//true


const now = new Date()
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());



