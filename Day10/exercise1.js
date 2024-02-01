const companies = new Set()
console.log(companies);

const numbers = [0,1,2,3,4,5,6,7,8,9,10]
setOfNumbers = new Set()
for(const number of numbers){
    setOfNumbers.add(number)
}
console.log(setOfNumbers);
setOfNumbers.delete(0)
console.log(setOfNumbers);
setOfNumbers.clear()
console.log(setOfNumbers);

const strings = ["Wale", "Emmanuel", "Tunde", "Daniel", "Tope"]
const newStrings = new Set()
for(const string of strings){
    newStrings.add(string)
}
console.log(newStrings);

// const map = new Map()
// console.log(map);
const countries = ['Finland', 'Sweden', 'Norway']
const countrySet = new Set(countries);
const countryAndLength = []


countrySet.forEach((country) =>{
    countryAndLength.push({country:`${country}`, length:country.length})
})
console.log(countryAndLength);



