//ForEach iterates an array elements. It is only used with arrays.It takes a callback function with elements, index parameter and array itself. The index and the array optional.

//map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.

//Filter: Filter out items which full fill filtering conditions and return a new array.

//reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

//A callback function is a function which can be passed as parameter to other function.

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const eachCountry = countries.forEach((country) => console.log(country));

const eachNames = names.forEach((name) => console.log(name));

const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

const squareNumbers = numbers.map((number) => number * number);
console.log(squareNumbers);

const nameToUpperCase = names.map((name) => name.toUpperCase());
console.log(nameToUpperCase);

const mapProducts = products.map((product) => console.log(product));

const landCountries = countries.filter((country) => country.includes('land'));
console.log(landCountries);

const countriesWithSixChar = countries.filter((country) => country.length == 6)
console.log(countriesWithSixChar);

const counrtryE = countries.filter((country)=> country.startsWith("E"))
console.log(counrtryE);

const pricesWithValue = products.filter((item) => typeof item.price === 'number')
console.log(pricesWithValue);

const getStringsLists = (arr) =>{
  const strings = arr
  const result = strings.filter((string) => typeof string === 'string')

  return result

}
console.log(getStringsLists(["Oyegunle", "Emmanuel", "JavaScript Dev", 23, 2024]));


const numSum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(numSum);

const Estonia = countries.unshift("Estonia")
const concatinateString = countries.reduce((acc, cur) => `${acc},${cur}`)
console.log(`${concatinateString} are north European countries`);

//some: Check if some of the elements are similar in one aspect. It returns boolean

// every: Check if all the elements are similar in one aspect. It returns boolean

const someNamesGreaterThanSeven = names.some((name) => name.length > 7)
console.log(someNamesGreaterThanSeven);

const checkCountries = countries.every((country) => country.includes("land"));
console.log(checkCountries);

//find: Return the first element which satisfies the condition

// findIndex: Return the position of the first element which satisfies the condition

const firstCountry = countries.find((country)=> country.length == 6)
console.log(firstCountry);

const findNorway = countries.findIndex((country) => country == 'Norway')
console.log(findNorway);

const findRussia = countries.findIndex((country) => country === 'Russia')
console.log(findRussia);







