const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages);
let min = Math.min(...ages)
console.log(min);
let max = Math.max(...ages)
console.log(max);
let medianIndex = ages.length / 2
let median = ages[medianIndex]
console.log(median);
let avgAge = (19 + 19 + 20 + 22 + 24 + 24 + 24 +25 + 25 + 26)/ages.length
console.log(avgAge);
const range = max - min
console.log(range);
let compare1 = min - avgAge
let compare2 = max - avgAge
console.log(compare1, compare2);
console.log(Math.abs(compare1 - compare2));
console.log(countries.slice(0,10));
const middleCountryIndex = Math.floor(countries.length/2)
const middleCountry = countries[middleCountryIndex]
console.log(middleCountry);


if(countries.length % 2 == 0){
    //First half
   let firstArr = countries.slice(0, middleCountryIndex)
   console.log(firstArr);
   //Second Half
   let secondArr = countries.slice(middleCountryIndex)
   console.log(secondArr);
}else{
    firstArr = countries.slice(0, middleCountryIndex)
    console.log(firstArr);
    firstArr.push("Nigeria")
    console.log(firstArr);
}


