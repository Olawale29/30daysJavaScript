let base = parseInt(prompt("Enter base: "))
let height = parseInt(prompt("Enter height: "))
let area = 0.5 * base * height
console.log(area);

let a = parseInt(prompt("Enter side a: "))
let b = parseInt(prompt("Enter side b: "))
let c = parseInt(prompt("Enter side c: "))
let perimeter = a + b + c
console.log(perimeter);

let length = parseInt(prompt("Enter lengthL: "))
let width = parseInt(prompt("Enter width: "))
let rectangle_perimeter = 2 * (length + width)
console.log(rectangle_perimeter);

const PI =3.14
let radius = parseInt(prompt("Enter radius: "))
const areaOfCircle = PI * radius * radius


const slope = 2
const xIntercept = 2/2
const yIntercept = -2
console.log(`Slope: ${slope}`);
console.log(`X-Intercept: ${xIntercept}`);
console.log(`yIntercept: ${yIntercept}`);

const x1 = 2;
const y1 = 2
const x2 = 6
const y2 = 10

const m = (y2-y1)/(x2-x1)
console.log(Math.ceil(m));

console.log(slope === m);

let time = parseInt(prompt("Enter hours: "))
let rate_per_hour = parseInt(prompt("Enter rate per hour: "))
let weekly_earning = time * rate_per_hour
console.log(weekly_earning);

let user = prompt("Enter name: ")
let userLength = user.length
userLength > 7
? console.log(`Your first name ${user} is long`)
: console.log(`Your first name ${user} is short`)

let familyName = prompt("Enter family name: ");
let familyNameLength = familyName.length
console.log(userLength);
console.log(familyNameLength);
userLength > familyNameLength
? console.log(`Your first name, ${user} is longer than family name ${familyName}`)
: console.log(`Your last name ${familyName} is longer than your family name ${user}`);

let myAge = 250
let yourAge = 25

let diff = myAge - yourAge
console.log(`I am ${diff} years Older than you`);

let currentYear = 2024
let birthYear = parseInt(prompt("Enter Year"))
let age1 = currentYear - birthYear
age > 18
? console.log(`You are ${age1}. You are old enough to drive`)
: console.log(`You are ${age}. You would be allowed to drive after ${18-age} years. `);


const Years = parseInt(prompt(`Enter number of years: `))
const secondsInYear = 365 * 24 * 60 * 60
const totalSeconds = Years * secondsInYear

console.log(`You lived ${totalSeconds} seconds`);


// const now = new Date()
const year = now.getFullYear()
const month = now.getMonth() + 1
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()

console.log(`${year}/${month}/${date} ${hours}:${minutes}`)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
















