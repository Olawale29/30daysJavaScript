class Breed extends Animal{
    constructor(name, age, color,legs ,breed, height){
        super(name,age,color,legs)
        this.breed = breed
        this.height = height
        this.gender = 'male'
    }
    getAnimalInfo(){
        let landForms = this.landForms.length > 0 && this.landForms.slice(0, this.landForms.length-1).join(', ')  + ` and ${this.landForms[this.landForms.length-1]}`
        let formatedForms = landForms ? `has the ability to stay in ${landForms}` : '';

        let breed = 'Bull Dog'
        let height = 6
        let pronoun = this.gender == 'male' ? 'He' : 'She'
        let info = `${this.name} is ${this.age} years old and the color is ${this.color}. ${pronoun} has ${this.legs} legs and ${this.toes} toes. ${pronoun} is ${height} tall. The breed is ${breed} and ${formatedForms} `

        return info

    }
}
const b1 = new Breed('lacie', 19, 'red', 5, 'bulldog')
b1.setToes = 4
b1.setLandForms = 'Vallies',
b1.setLandForms = 'Rivers',
b1.setLandForms = 'Oceons'
console.log(b1.getAnimalInfo());