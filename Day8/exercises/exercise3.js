const sum = (arr) =>{
    let total = 0
    for(let i=0; i<arr.length; i++){
        total+=arr[i]
    }
    return total
}


const personAccount = {
    firstName: "Emmanuel",
    lastName: "Oyegunle",
    Incomes: [1000,5000,3000],
    expenses:[200, 300, 500, 400],
    totalIncome(){
        return sum(this.Incomes);
    },
    totalExpenses(){
        return sum(this.expenses)
    },
    accountInfo(){
        return `First Name: ${personAccount.firstName},
        Last Name: ${personAccount.lastName} 
        Incomes: ${personAccount.Incomes}
        Expenses: ${personAccount.expenses}
        Total Income: ${personAccount.totalIncome()}
        Total Expenses: ${personAccount.totalExpenses()}`

    },
    addExpense(amount){
        return this.expenses.push(amount)
    },
    accountBalance(){
        return this.totalIncome()- this.totalExpenses()
    }


    }

console.log(personAccount.accountInfo());
console.log(personAccount.addExpense(100));
console.log(personAccount);
console.log(`Oyegunle Emmanuels Personal account Details:
Total Income is $${personAccount.totalIncome()}, his expenses is $${personAccount.totalExpenses()}, and his accout balance is $${personAccount.accountBalance()}`);


const people = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]


// const randomCharcter = (length) =>{
//     let character = 'abcdefghijklmnopqrstuvwzyz0123456789'
//     let result = ''
//     for(let i= 0; i< length; i++){
//         let randomNum = Math.floor(Math.random() * character.length)
//         result += character[randomNum]

//     }
//     return result

// }
// console.log(randomCharcter(6));
// '08/01/2020 9:50 AM',

// const getTimeDate = () =>{
//     let timezone = 'AM'
//     const now = new Date()
//     const year = now.getFullYear()
//     const date = now.getDate();
//     let hours = now.getHours();
//     const minutes = now.getMinutes()
//     const month = now.getMonth() +1;
//     const time = [month, date, hours,minutes]
//     if(hours > 11){
//         timezone = 'PM';
//         hours -=12;
//         if(hours == 0){
//             hours+=12
//         }
//     }
//     for(let i=0; i<time.length; i++){
//         if(time[i] > 9){
//             time[i] = time[i]
//         }else{
//             time[i] = `0${time[i]}`
//         }     
//     }
//     let currentTime = `${date}/${month}/${year} ${hours}:${minutes} ${timezone}`
//     return currentTime;
// }
// console.log(getTimeDate());

// const signUp = () =>{
//     let id = prompt("Enter your id: ")
//     let username = prompt("Enter your username: ")
//     let email = prompt("Enter your email: ")
//     let password = prompt("Enter your password: ") 
//     let createdAt = getTimeDate()
//     let isLoggedIn = false

    
//     let newObject = {
//         _id: `${id}`,
//         username: `${username}`,
//         email: `${email}`,
//         password: `${password}`,
//         createdAt: `${createdAt}`,
//         isLoggedIn: `${isLoggedIn}`

//     }
//     for(let i = 0; i<people.length; i++){
//         if(people[i]._id === newObject._id){
//             console.log('User already exist')
//             return;
                 
//         }
       
//     }
//     people.push(newObject);
//     console.log('User successfully signed up:', newObject);
    
// }
// signUp();


// const signIn = () =>{
//     let username = prompt("Enter your username: ")
//     let password = prompt("Enter your password: ")

//     let userIndex = -1

//     for(let i = 0; i<people.length; i++){
//         if(people[i].username === username && people[i].password === password){
//             userIndex = i
//             break;
            
//         }       
//     }
//     if(userIndex !=-1){
//         people[userIndex].isLoggedIn =true
//         console.log('You have successfully logged in');
//         console.log('Logged In user:', people[userIndex]);
//         return true
//     }else{
//         console.log('Wrong Information. Please provide the right details.');
//         return false
//     }


// }
// console.log(signIn());;

const rateProduct = (value1, value2) =>{
    for(let i = 0; i< products.length; i++){
        let object = {}
        if(products[i].ratings.length === 0){
            object.userId = value1
            object.rate = value2
            products[i].ratings.push(object)
        }
    }
    return products

}
console.log(rateProduct('emma1',5));

const averageRatings = ()=>{
    let total = 0
    let average;
    let ratingArr = []
    for(let i = 0; i< products.length; i++){
        let ratings = products[i].ratings
        for(let j=0; j< ratings.length; j++){
            let rate = ratings[j].rate
            ratingArr.push(rate)
            console.log(ratingArr);
            total+=rate
            average = total/ratingArr.length;
        

           

            
        }

    }
    return average

}
console.log(averageRatings());



const likeProducts = (like) =>{
    for(let i=0; i<products.length; i++){
        if(products[i].likes.length == 0){
            products[i].likes.push(like)
        }else{
            products[i].likes.length = 0
        }
    }
    return products
    
}
console.log(likeProducts('12345'));