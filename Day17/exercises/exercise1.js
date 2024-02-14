const user = {
    firstName: 'Emmanuel',
    lastName: 'Oyegunle',
    age: 23,
    country: 'Nigeria',
    city: 'Ibadan',
    
}
const userText = JSON.stringify(user, undefined, 4)
localStorage.setItem("user", userText)
console.log(localStorage);