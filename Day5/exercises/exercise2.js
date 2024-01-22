let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let txt_arr = text.split(" ")
console.log(txt_arr);
console.log(txt_arr.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
console.log(shoppingCart);
shoppingCart.push("Sugar")
console.log(shoppingCart);
shoppingCart.pop()
console.log(shoppingCart);
shoppingCart[2] = "Green Tea"
console.log(shoppingCart);

if(countries.includes("Ethiopia")){
    console.log('ETHIOPIA');
}else{
    countries.unshift("Ethiopia")
    console.log(countries);
}

if(webTechs.includes("Sass")){
    console.log('Sass is a CSS preprocess.');
}else{
    webTechs.unshift("Sass")
    console.log(webTechs);
}
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack);