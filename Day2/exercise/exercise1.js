let challenge = '30 Days Of Javascript'
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0,2));
console.log(challenge.substring(3,7));
console.log(challenge.includes('script'));
console.log(challenge.split());
console.log(challenge.split(' '));

let Companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
console.log(Companies.split(','));
console.log(challenge.replace('30 Days Of Javascript', '30 Days Of Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));

let text = 'You cannot end a sentence with because because because is a conjunction'
console.log(text.indexOf('because'));
console.log(text.lastIndexOf('because'));
console.log(text.search('because'));
console.log(challenge.trim(' '));
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('Javascript'));
console.log(challenge.match('a'));

let string = '30 days of'
console.log(string.concat(' ','Javascript'));
console.log(challenge.repeat(2));

