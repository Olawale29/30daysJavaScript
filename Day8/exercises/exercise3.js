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









function getProduct(productsArray)
{
    let productName = prompt('Enter product name: ').toLowerCase();
    let productDescription = prompt('Enter product description: ').toLowerCase();
    let productPrice = parseInt(prompt('Enter product price: '));
    if (Number.isNaN(productPrice)) return ('Product price must be a number!');

    for (const product of productsArray)
    {
        if (product.name.toLowerCase() === productName && product.description.toLowerCase() === productDescription && product.price === productPrice)
        {
            return (product);
        }
    }
    return ('Product not found!');
}

function rateProduct(productsArray)
{
    const product = getProduct(productsArray);
    if (typeof product === "string") return ('Product not found!');

    let productRating = Math.round(Number(prompt('Rate product : ')) * 10) / 10
    if (Number.isNaN(productRating)) return ('Product rating must be a number!');
    let userId = Math.random().toString(36).substr(2, 6);

    product.ratings.push({ userId: userId, rate: productRating });
    console.log('Rating successfully added');
    return (productsArray);
}
// console.log(rateProduct(products));

function averageProductRating(productsArray)
{
    const product = getProduct(productsArray);
    if (typeof product === "string") return ('Product not found!');
    let averageRating = 0;
    let count = 0;

    for (i = 0 ; i < product.ratings.length ; i++)
    {
        averageRating += product.ratings[i].rate;
        count++;
    }
    return (averageRating / count);
}
// console.log(averageProductRating(products));

function likeProduct(productsArray)
{
    const product = getProduct(productsArray);
    let userId = Math.random().toString(36).substr(2, 6);
    let isLiked;
    if (product.likes.length > 0)
    {
        product.likes.pop();
        isLiked = false;
    }
    else
    {
        product.likes.push(userId);
        isLiked = true;
    }
    return (isLiked);
}
//console.log(likeProduct(products));

// // const signUp = (obj) =>{
// //     people.push(obj);
// //     let isUserInArray = false;
// //     for(const user of people){
// //         if(user._id === obj.id){
// //             isUserInArray = true;
// //             break;
            
// //         }
// //     }
// //     if(isUserInArray){
// //         return 'You already have an account'
// //     }
// //     return 'You are now logged in'
    

// // }
// // console.log(signUp({
// //         _id: 'ghderc',
// //         username: 'Thomas',
// //         email: 'thomas@thomas.com',
// //         password: '123333',
// //         createdAt:'08/01/2020 10:00 AM',
// //         isLoggedIn: false
// // }));
// const signUp = (obj) => {
//     people.push(obj);
//     let isUserInArray = false;

//     for (const user of people) {
//         if (user._id === obj._id) {
//             isUserInArray = true;
//             break; // You found a matching user, so you can break out of the loop
//         }
//     }

//     if (isUserInArray) {
//         return 'You already have an account';
//     }

//     return `You are now logged in, here are your details ${JSON.stringify(obj)}`;
// };

// console.log(signUp({
//     _id: '',
//     username: 'Thomas',
//     email: 'thomas@thomas.com',
//     password: '123333',
//     createdAt: '08/01/2020 10:00 AM',
//     isLoggedIn: false
// }));

