const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  console.log(users);

  let maxSkills = 0;
  let skilledPerson = null;

  for(const person in users){
    if(users.hasOwnProperty(person)){
        const skillsCount = users[person].skills.length;
        if(skillsCount > maxSkills){
            maxSkills = skillsCount
            skilledPerson = person;
        }
    }
  }
console.log(`The skilled person is ${skilledPerson} because he has ${maxSkills} skills`);


let loggedInUsers = 0;
let NotloggedInUsers = 0
let highestPoint = 0

for(const person in users){
    if(users.hasOwnProperty(person)){
        let isLoggedIn = users[person].isLoggedIn
        if(isLoggedIn){
            loggedInUsers++;
        }else{
            NotloggedInUsers++;
           

        }
        let points = users[person].points
        if(points >=50){
            highestPoint++;
        }

    }
}
console.log(`Logged In users are ${loggedInUsers} and users having greater than equal to 50 points are ${highestPoint}`);

let mernStack = 0;
let mern = ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node']
for(const person in users){
    if(users.hasOwnProperty(person)){
        let stack = users[person].skills
        let allStackPresent = mern.every(str => stack.includes(str)) //true/false
    if(allStackPresent){
        mernStack++;

    }
    }
}
console.log(`The people who are using MERN stack are ${mernStack}`);

users.Emmanuel = {
  email: 'oyegunleemmanuel39@gmail.com',
  skills:['HTML', 'CSS', 'JavaScript'],
  age: 23,
  isLoggedIn: 'true',
  points: 100
}
console.log(users);

let keys = Object.keys(users)
console.log(keys);

let value = Object.values(users)


const country =[
  {
    countryName: "Nigeria",
    capital: "Abuja",
    population: 500,
    languages: ["English", 'Yoruba', "Igbo", "Hausa"]

  }
  
]

console.log(country);










  