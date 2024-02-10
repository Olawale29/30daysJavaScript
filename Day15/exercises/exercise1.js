class Animal {
    constructor(name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        this.toes = 0
        this.landForms = []

    }
    get getName(){
        return this.name
    }
    get getAge(){
        return this.age
    }
    get getColor(){
        return this.color
    }
    get getLegs(){
        return this.legs
    }
    get getToes(){
        return this.toes
    }
    set setToes(toes){
        this.toes += toes
    }
    set setLandForms(char){
        this.landForms.push(char)
    }
    getAnimalInfo(){
        let landForms = this.landForms.length > 0 && this.landForms.slice(0, this.landForms.length-1).join(', ')  + `and ${this.landForms[this.landForms.length-1]}`
        let formatedForms = landForms ? `the ability to stay in ${landForms}` : '';
        
        let info = `${this.name} is ${this.age} years old and the color is ${this.color}. The animal also has ${this.legs} legs and ${this.toes} toes and ${formatedForms}`

        return info

    }
     //getGender(){
    //     return this.gender
    // }
}
const animal1 = new Animal('Bingo', 24, 'black', 4)
animal1.setToes = 4
animal1.setLandForms = 'Mountains',
animal1.setLandForms = 'Deserts',
animal1.setLandForms = 'Island',
animal1.setLandForms = 'plains',
animal1.setLandForms = 'plateus'
console.log(animal1.getToes);
console.log(animal1.getAnimalInfo());



class Dog extends Animal{
    dogFood(){
        console.log('The dog likes food!!');
    }
}
const d1 = new Dog('Lily', 19, 'brown', 4)
console.log(d1.dogFood());
console.log(d1.getAnimalInfo());


class Cat extends Animal{
    CatSound(){
        console.log('The cat likes making the sound Meow!!');
    }
}
const cat = new Cat('Kitty', 23, 'white', 10, 'Male', 'Meow')
console.log(cat);
console.log(cat.CatSound());
console.log(cat.getAnimalInfo());










