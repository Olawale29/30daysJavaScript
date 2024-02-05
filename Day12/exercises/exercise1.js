const pattern = /\d+/g
const text = "Calculate the total annual income of the person from the following text. 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month'."
const match = text.match(pattern)
let sum = 0
let numbers = []
for(let i = 0; i< match.length; i++){
    let stringToNum = Number(match[i])
    numbers.push(stringToNum)
    sum +=numbers[i]
}
console.log(`The total annual income of the person is ${sum}`);

// const txt = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles."
let points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// const patterns = /-?\d+/g
// const matches = txt.match(patterns)
// console.log(matches);
const num = []
for(let i = 0; i<points.length; i++){
    let strToNum = Number(points[i])
    num.push(strToNum)
}
num.sort(function(a,b){
    return a-b
});
console.log(num);

let smallest = Math.min(...num)
let highest = Math.max(...num)

// console.log(smallest);
// console.log(highest);

const distance = highest - smallest
console.log(points);
console.log(num);
console.log(`Distance = ${distance}`);

let patternss = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
let is_valid_variable = 'first-name'
console.log(patternss.test(is_valid_variable));