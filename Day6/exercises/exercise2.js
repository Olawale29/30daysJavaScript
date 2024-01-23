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
        }
     
    }
    if(found){
        break;
    }
}
if(found){
    console.log("It has array");
}else{
    console.log("All these countries are without land");
}

