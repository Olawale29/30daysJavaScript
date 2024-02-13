const newObj = JSON.parse(txt)
console.log(newObj);

const data = JSON.parse(txt)
let maxSkills = 0
let userWithmanySKills = ''
for(const user in data){
    const userSkillCount = data[user].skills.length;
    if(userSkillCount > maxSkills){
        maxSkills = userSkillCount
        userWithmanySKills = user
    }
}
console.log(`${userWithmanySKills} has the highest skills`);

