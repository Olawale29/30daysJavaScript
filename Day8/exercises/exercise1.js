const dog ={}
console.log(dog);

dog.name = 'Jack',
dog.legs = 4,
dog.color = 'black',
dog.age = 10
const bark = () =>{
    return 'woof woof'
}
dog.bark = bark();

console.log(dog['name']);
console.log(dog['legs']);
console.log(dog.age);
console.log(dog.bark);

dog.breed = 'German Shephard'
dog.getDogInfo = true

console.log(dog);

