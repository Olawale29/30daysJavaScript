for(const {...allkeys} of users){
    console.log(Object.keys(allkeys));
}

// for (const user of users) {
//     const { name, scores, skills, age } = user;
//     const keys = Object.keys(user);
    
//     console.log(`${keys}`);
//     console.log(typeof keys);
//   }

for(const user of users){
    const {name, scores, skills, age}= user
    if(skills.length < 2){
        console.log(user);
        
    }
}


  
