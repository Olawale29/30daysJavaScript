let randomize = Math.ceil(Math.random()*50)
let randomNumbers =''
for(i = 0; i<randomize; i++){
    let randomIndex2 = Math.floor(Math.random() * characters.length)
    console.log(randomIndex2);
    randomNumbers+=characters.charAt(randomIndex2)
}
console.log(randomNumbers);


let hexadecimal = '0123456789abcdef'
let randomHexedecimal = ''

for(i=0; i<6; i++){
    let randomHexIndex = Math.floor(Math.random() * hexadecimal.length);
    console.log(randomHexIndex);
    randomHexedecimal+=hexadecimal.charAt(randomHexIndex)
}
console.log(`#${randomHexedecimal}`);


let colorcodes = []
for(i = 0; i<3; i++){
    let randomColorNum = Math.floor(Math.random() * 256)
    colorcodes.push(randomColorNum);
 }
console.log(`rgb(${colorcodes})`);

const countries = [
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
    'Kenya'
  ]

const newArr = []
for(const country of countries){
    newArr.push(country.toUpperCase())
}
console.log(newArr);

const lenArr = []
for(let i = 0; i< countries.length; i++){
   let currentLength = countries[i].length;
   lenArr.push(currentLength)
}
console.log(lenArr);

const ParentArray = []
const newCountryArr =[]
for(i=0; i<countries.length; i++){
    let countryShort = countries[i].slice(0,3)
    newCountryArr.push(countryShort)

}

console.log(newCountryArr);
ParentArray.push(countries, newCountryArr, lenArr)
console.log(ParentArray);

let text = "land"
let found = false
let arrays = []
for(let i = 0; i<ParentArray.length; i++){
    for(let j = 0; j< ParentArray[i].length; j++){
        if(ParentArray[i][j].includes(text)){
            found =true
            arrays.push(ParentArray[i][j])
    
        }
     
    }
    if(found){
        break;
    }
}
if(found){
    console.log("It has array");
    console.log(arrays);
}else{
    console.log("All these countries are without land");
}

let endText = 'ia'
let foundText = false
let endArr = []
for(let i = 0; i< ParentArray.length; i++){
    for(let j = 0; j<ParentArray[i].length; j++){
        if(ParentArray[i][j].endsWith(endText)){
            foundText = true
            endArr.push(ParentArray[i][j])
        }
    }
    if(foundText){
        break
    }
}
if(foundText){
    console.log("It as array");
    console.log(endArr);
}else{
    console.log("There are no countries without ai");
}
// const lenArr = []
// for(let i = 0; i< countries.length; i++){
//    let currentLength = countries[i].length;
//    lenArr.push(currentLength)
// }
// console.log(lenArr);

//['Albania', 'Bolivia', 'Ethiopia']

let longestString = ""
for(let i = 0; i<endArr.length; i++){
    if(endArr[i].length > longestString.length){
        longestString = endArr[i]
    }
}
console.log(longestString);

const newArray = []
for(let i = 0; i< countries.length; i++){
    if(countries[i].length == 5){
        newArray.push(countries[i])
    }
}
console.log(newArray);

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
let longestString2 = ""
for(let i = 0; i< webTechs.length; i++){
    if(webTechs[i].length > longestString2.length){
        longestString2 = webTechs[i]
       
    }
   
}
console.log(longestString2);


let newWebTechArr = []
for(let i=0; i<webTechs.length; i++){
    let webnum = webTechs[i];
    let newWeb = [`${webnum},${webTechs.length}`]
    newWebTechArr.push(newWeb)
}
console.log(newWebTechArr);


const mernStack = ['MongoDB', 'Express', 'React', 'Node']

let accr = ""
for(i=0; i<mernStack.length; i++){
    let stackIndex = mernStack[i][0]
    accr += stackIndex

}
console.log(accr);

const languages = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

let newLan = []
for(let i=0; i<languages.length; i++){
    let currentlan = languages[i]
    newLan.push(currentlan)
  
    
}
console.log(newLan);

let reverseArr =[]
let fruitArr =  ['banana', 'orange', 'mango', 'lemon']
for(let i = fruitArr.length-1; i>=0; i--){
    let currentFruit = fruitArr[i]  
    reverseArr.push(currentFruit)
}
console.log(reverseArr);


const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
for(let i=0; i<fullStack.length; i++){
    for(let j=0; j<fullStack[i].length; j++){
        let currentPosition = fullStack[i][j]
        console.log(currentPosition);
      
    }

}











