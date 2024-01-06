let userScore = parseInt(prompt("Enter score: "))
if(userScore >= 80 && userScore <= 100){
    console.log("A");
}else if(userScore >= 70 && userScore <= 89){
    console.log("B");
}else if(userScore >=60 && userScore <= 69){
    console.log("C");
}else if(userScore >= 50 && userScore <= 59){
    console.log("D");
}else if(userScore >= 0 && userScore <= 49){
    console.log("F");
}

let month = prompt("Enter month: ").toLowerCase();
if(month == 'september' || month == 'october' || month == 'november'){
    console.log('The Season is Autumn');
}else if(month == 'december' || month == 'january' || month == 'february'){
    console.log('The season is Winter');
}else if(month == 'march' || month == ' april' || month == ' may'){
    console.log("The season is Spring");
}else if(month == 'june' || month == "july" || month == 'august' ){
    console.log();"The season is Summer"
}

let day = prompt("Enter day").toLowerCase();
if(day == 'monday' || day == 'tuesday' || day == "wednesday" || day == " thursday" || day == "friday"){
    console.log(`${day} is a working day`);
}else if(day == "saturday" || day == "sunday"){
    console.log(`${day} is a weekend`);
}