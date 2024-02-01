const newCountries = new Set(countriesx)
console.log(`There are ${newCountries.size} countries in the country object file`);



// function countNumberOfLanguages(array)
// {
//     const languagesSet = new Set();
//     array.map((object) => object.languages.map((language) => languagesSet.add(language)));
//     return (languagesSet.size);
// }
// console.log(countNumberOfLanguages(countries));

// function mostSpokenLanguages(array, lastIndex)
// {
//     const count = [];
//     const languagesArray = [];
//     array.map((object) => object.languages.map((lang) => languagesArray.push(lang)));
//     const languagesSet = new Set(languagesArray);

//     for (const language of languagesSet)
//     {
//         let filteredLang = languagesArray.filter((lang) => lang === language);
//         const obj = { language: language, count: filteredLang.length };
//         count.push(obj);
//     }

//     count.sort((a, b) => b.count - a.count);
//     const result = count.map((object) => object = { [object.language]: object.count });
//     return (result.slice(0, lastIndex));
// }
// console.log(mostSpokenLanguages(countries, 10));
// console.log(mostSpokenLanguages(countries, 3));
