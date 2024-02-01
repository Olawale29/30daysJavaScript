const total = products.filter((item) => typeof item.price == 'number').map((item) => item.price).reduce((acc, cur) => acc + cur,0)
console.log(total);

const sumOfPrices = products.reduce((acc, item) => {
    if(typeof item.price === 'number'){
        acc += item.price;
    }
    return acc
},0)
console.log(sumOfPrices);

const categorizeCountry = () =>{
    let patterns = ["land", "ia", "island", "stan"]
    const filterCountries = countriesx.filter((country) => patterns.some((pattern) => country.name.includes(pattern)))
    return filterCountries
}
console.log(categorizeCountry());

const ArrayOfObject = (countryArr) =>{
  const letterAndNumberOftimes = {}
  countryArr.forEach((country)=>{
    const firstLetter = country.name.charAt(0)
    letterAndNumberOftimes[firstLetter] = (letterAndNumberOftimes[firstLetter] || 0) + 1
    
  });
  const resultArr = Object.entries(letterAndNumberOftimes).map(([letter, count])=> ({letter, count}));
  return resultArr

}
console.log(ArrayOfObject(countriesx));

const getFirstTenCountries = (countryArr) =>{
  const firstTenCountries = countryArr.slice(0,10)
  firstTenCountries.forEach((country) =>{
    console.log(country);
  })
  return firstTenCountries

}
console.log(getFirstTenCountries(countriesx));

const getLastTenCountries = (countryArr) =>{
  const LastTenCountries = countryArr.slice(-10)
  LastTenCountries.forEach((country)=>{
    console.log(country);
  })
  return LastTenCountries
}
console.log(getLastTenCountries(countriesx));


// const ArrayOfObject = (countryArr) =>{
//   const letterAndNumberOftimes = {}
//   countryArr.forEach((country)=>{
//     const firstLetter = country.name.charAt(0)
//     letterAndNumberOftimes[firstLetter] = (letterAndNumberOftimes[firstLetter] || 0) + 1
    
//   });
//   const resultArr = Object.entries(letterAndNumberOftimes).map(([letter, count])=> ({letter, count}));
//   return resultArr

// }
// console.log(ArrayOfObject(countriesx));


const LetterUsedMayTimesAsInitial =((countryArr) =>{
  let HighestletterWithManyInital = {}
  countryArr.forEach((country) =>{
    let firstChar = country.name.charAt(0)
    if(!country.name.includes(" ")){
      HighestletterWithManyInital[firstChar] = (HighestletterWithManyInital[firstChar] || 0) +1
    
    }
  })

  const result = Object.entries(HighestletterWithManyInital).map(([letter, numberOftimes]) => ({letter, numberOftimes}));

  const highestValue = result.reduce((max,cur) => (cur.numberOftimes > max ? cur.numberOftimes : max),result[0].numberOftimes)

  const target = highestValue
  const resultWithTarget = result.find((item) => item.numberOftimes === target)
  
  return resultWithTarget
  
})
console.log(LetterUsedMayTimesAsInitial(countriesx));