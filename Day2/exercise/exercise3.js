let stringss = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /love/gi
let love_array = stringss.match(pattern)
console.log(love_array);
console.log(`So therefore the word 'love' appeard ${love_array.length} times`);

let sentence1 = 'You cannot end a sentence with because because because is a conjunction'

let patterns = /because/gi
let patterns_array = sentence1.match(patterns)
console.log(patterns_array);
console.log(`So therefore the word 'because' appered ${patterns_array.length} times`);


const sentences = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let pattern_way = /[%$%@&#;!]/g;
let result = sentences.replace(pattern_way, '')
console.log(result)

let texts =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let regEx = /\d+/g;
console.log(texts.match(/\d+/g));
let incomes = texts.match(regEx)
result = (parseInt(incomes[0] *12) + parseInt(incomes[1])+ parseInt(incomes[2])*12)
console.log(`${result}`);
