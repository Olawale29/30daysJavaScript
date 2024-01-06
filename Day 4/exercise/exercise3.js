//January, March, May, July, August, October, and December.
let year = parseInt(prompt("Enter Year: "))
let month_name = prompt("Enter a month: ").toLowerCase();
if(month_name == "january" || month_name == "march" || month_name == "May" || month_name == "july" || month_name =="august" || month_name == "october" || month_name == "december"){
    console.log(`${month_name} has 31 days`);
}else if(month_name == "february"){
    console.log(`${month_name} has 28 days`);
}else if(month === 'april' || month === 'june' || month === 'september' || month === 'november'){
    console.log(`${month} has 30 days`);
}else{
    console.log(`${month} is not in the year`);
}
//leap year


 let leap = year % 4;
console.log(leap);

if(month_name == "january" || month_name == "march" || month_name == "may" || month_name == "july" || month_name =="august" || month_name == "october" || month_name == "december"){
    console.log(`${month_name} has 31 days`);
}else if(leap == 0 && month_name == "february"){
    console.log(`${month_name} has 29 days`);
}else if(month_name === 'april' || month_name === 'june' || month_name === 'september' || month_name === 'november'){
    console.log(`${month_name} has 30 days`);
}else{
    console.log(`${month_name} is not in the year`);
}