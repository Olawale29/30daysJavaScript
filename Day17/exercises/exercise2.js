const student = {
    firstName: "Damilola",
    lastName: "Oyegunle",
    age: 18,
    skills: ['HTNL', 'CSS', 'JAVASCRIPT', 'PYTHON', 'POWERBI']

}
const studentText = JSON.stringify(student, undefined, 4);
localStorage.setItem('student', studentText)
console.log(localStorage);