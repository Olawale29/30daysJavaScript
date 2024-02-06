const countriesx = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
console.time('Regular for loop');
for(let i = 0; i< countriesx.length; i++){
    console.log(countriesx[i][0], countriesx[i][1]);
}
console.timeEnd('Regular for loop');

console.time('for of loop');
for(const [name, city] of countriesx){
    console.log(name, city);
}
console.timeEnd('for of loop');

console.time('forEach loop');
countriesx.forEach(([name, city]) =>{
    console.log(name, city);
})
console.timeEnd('forEach loop');
