const arrayss = []
for(let i = 0; i< countries.length; i++){
    let eachitem = countries[i]
    arrayss.push(eachitem);
    
}
console.log(arrayss);
let sortedCountries = arrayss.sort()
console.log(sortedCountries);

let sortedWebTechArr = webTechs.sort()
console.log(sortedWebTechArr);
let sortedMernStackArr = mernStack.sort();
console.log(sortedMernStackArr);

const landArr = []
let foundLand = false
for(let i=0; i<countries.length; i ++){
    let current = countries[i]
    if(current.includes("land")){
        landArr.push(current)
    }
}
console.log(landArr);

let longestStrings = ""
let lgArr = []
for(let i = 0; i<countries.length; i++){
    if(countries[i].length > longestStrings.length){
        longestStrings = countries[i]
    }
}
const myArray = longestStrings.split(" ")
lgArr.push(myArray)
console.log(longestStrings);
console.log(lgArr);

const fourArr = []
for(let i = 0; i< countries.length; i++){
    let currentx = countries[i]
    if(currentx.length == 4){
        fourArr.push(currentx)
    }
}
console.log(fourArr);
console.log("There is no four characters in the country array");

const currsArr = []
for(let i = countries.length -1; i>=0; i--){
    let currs = countries[i].toUpperCase();
    currsArr.push(currs)

}
console.log(currsArr);

