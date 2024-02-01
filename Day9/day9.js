const callback = (n) => {
  return n ** 2
}

// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}
console.log(cube(callback, 3))

// Higher order function returning an other function
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))

// const numbers = [1,2,3,4,5]

// const sumOfArray = arr =>{
//   let sum = 0
//   const callback = function(element){
//     sum +=element;
//   }
//   arr.forEach(callback)
//   return sum

// }
// console.log(sumOfArray(numbers));

const numbers =[1,2,3,4,5]
let sum = 0
const sumOfArray = arr =>{
arr.forEach(function(element){
  sum += element
})
return sum

}
console.log(sumOfArray(numbers));

// function sayHello() {
//   console.log('Hello')
// }
// setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

// arr.forEach((element, index, arr) =>{
//   console.log(index, element, arr);
// })

let total = 0
const numArray = [1,2,3,4,5]
numArray.forEach(elements => console.log(elements));
console.log(total);

let add = 0
const elements = [1,2,3,4,5]
elements.forEach(num => add +=num)
console.log(add);

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

countries.forEach(country => console.log(country.toUpperCase()))

/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const num = [1, 2, 3, 4, 5]
const numbersSquare = num.map((num) => num * num)

console.log(numbersSquare)

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase);

const countriess = [
'Albania',
'Bolivia',
'Canada',
'Denmark',
'Ethiopia',
'Finland',
'Germany',
'Hungary',
'Ireland',
'Japan',
'Kenya',
]

const countriessToUperCase = countriess.map((country) => country.toUpperCase())

console.log(countriessToUperCase);

const countriesFirstThreeLetters = countriess.map((country) => country.toUpperCase().slice(0,3))

console.log(countriesFirstThreeLetters);

const countriesContainingLand = countriess.filter((country) => country.includes('land'));
console.log(countriesContainingLand);

const countriesEndsByia = countriess.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)

const digits = [1,2,3,4,5]
const addition = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(addition);

const namesString =['Asabeneh', 'Mathias', 'Elias', 'Brook']

const areAllString = namesString.every((name) => typeof name === 'string')
console.log(areAllString);

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)

const scores = [
{ name: 'Asabeneh', score: 95 },
{ name: 'Mathias', score: 80 },
{ name: 'Elias', score: 50 },
{ name: 'Martha', score: 85 },
{ name: 'John', score: 100 },
]

const score = scores.find((user) => user.score > 80)
console.log(score)

const namess = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const agess = [24, 22, 25, 32, 35, 18]

const result = namess.findIndex((name) => name.length > 7)
console.log(result) // 0

const agex = ages.findIndex((age) => age < 20)
console.log(agex) // 5

const lastName = ['Asabeneh', 'Mathias', 'Elias', 'Brook',1,2,4]

const someAreStrings = lastName.some((element) => typeof element === 'string')
console.log(someAreStrings);

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted

  