const arr = Array();
console.log(arr);
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);

let middleIndex = Math.floor(numbers.length / 2);
let middleItem = numbers[middleIndex];
let lastIndex = numbers.length - 1;
console.log(`First Item is ${numbers[0]}`);
console.log(`Middle Item is ${middleItem}`);
console.log(`Last Item is ${numbers[lastIndex]}`);

const mixedDataTypes = [
  "Emmanuel",
  200,
  true,
  null,
  { country: "Nigeria", city: "Lagos" },
  { Skiils: ["HTML", "CSS", "JS", "React", "Python"] },
];
console.log(mixedDataTypes);

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon"
];

let middleIndex2 = Math.floor(itCompanies.length / 2);
let middleCompany = itCompanies[middleIndex2];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(`First Company is ${itCompanies[0]}`);
console.log(`Middle Company is ${middleCompany}`);
console.log(`Last Company is ${itCompanies[itCompanies.length - 1]}`);

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

itCompanies[0] = itCompanies[0].toUpperCase();
console.log(itCompanies[0]);
itCompanies[1] = itCompanies[1].toUpperCase();
console.log(itCompanies[1]);
itCompanies[2] = itCompanies[2].toUpperCase();
console.log(itCompanies[2]);
itCompanies[3] = itCompanies[3].toUpperCase();
console.log(itCompanies[3]);
itCompanies[4] = itCompanies[4].toUpperCase();
console.log(itCompanies[4]);
itCompanies[5] = itCompanies[5].toUpperCase();
console.log(itCompanies[5]);
itCompanies[6] = itCompanies[6].toUpperCase();
console.log(itCompanies[6]);

itCompanies[0] = itCompanies[0][0] + itCompanies[0].substr(1).toLowerCase();
itCompanies[1] = itCompanies[1][0] + itCompanies[1].substr(1).toLowerCase();
itCompanies[2] = itCompanies[2][0] + itCompanies[2].substr(1).toLowerCase();
itCompanies[3] = itCompanies[3][0] + itCompanies[3].substr(1).toLowerCase();
itCompanies[5] = itCompanies[5][0] + itCompanies[5].substr(1).toLowerCase();
itCompanies[6] = itCompanies[6][0] + itCompanies[6].substr(1).toLowerCase();

const companyString = itCompanies.toString();
console.log(`${companyString} are big IT companies`);

// if (itCompanies.includes("Facebook")) {
//   console.log("The company Facebook is found");
// } else {
//   console.log("a company is not found");
// }

// let filteredCompanies = [];

// for (let i = 0; i < itCompanies.length; i++) {
//   let company = itCompanies[i];
//   let oCount = 0;

//   for (let j = 0; j < company.length; j++) {
//     if (company[j].toLowerCase() === "o") {
//       oCount++;
//     }
//   }

//   if (oCount > 1) {
//     filteredCompanies.push(company);
//   }
// }

// console.log(filteredCompanies);

itCompanies.sort();
console.log(itCompanies);
itCompanies.reverse();
console.log(itCompanies);
console.log(itCompanies.slice(0, 4));
console.log(itCompanies.slice(-3));
middleIndex2 = Math.floor(itCompanies.length / 2);
middleCompany = itCompanies[middleIndex2];
console.log(itCompanies.slice(middleIndex2, middleIndex2 +1));
console.log(itCompanies.shift());
console.log(itCompanies);
console.log(middleCompany);
console.log(itCompanies.splice(middleIndex2, 1));
console.log(itCompanies);
console.log(itCompanies.pop());
console.log(itCompanies);
console.log(itCompanies.length = 0);
console.log(itCompanies);




