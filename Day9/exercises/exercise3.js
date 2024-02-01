countriesx.sort((a, b) =>{
    if(a.name < b.name) return -1;
    if(b.name > b.name) return 1;

    if(a.capital < b.capital) return -1;
    if(a.capital > b.capital) return 1
    
    return a.population - b.population
})
console.log(countriesx);

const mostSpokenLanguages = ((countries ,count) =>{
    let langCount = {}
    countries.forEach((country) =>{
        country.languages.forEach((language) =>{
            if(langCount[language]){
                langCount[language]++
            }else{
                langCount[language] = 1
            }

        });


    });
    const sortedLanguages = Object.keys(langCount).sort((a, b) => langCount[b] - langCount[a]);

    const result = sortedLanguages.slice(0, count).map(language => ({
      country: language,
      count: langCount[language],
    }));
  
    return result;



})
console.log(mostSpokenLanguages(countriesx,10));


const mostPopulatedCountries = (countries, count) => {
    const sortedCountries = countries.slice().sort((a, b) => b.population - a.population);
    
    const result = sortedCountries.slice(0, count).map(country => ({
      name: country.name,
      population: country.population
    }));
  
    return result;
  };
  
  console.log(mostPopulatedCountries(countriesx, 3));
  

  const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

  const statics ={
    count: function(){
        const totalAges = ages.length;
        console.log(totalAges);
    },
    sum: function(){
        const totalAge = ages.reduce((acc, curr)=> acc + curr, 0);
        console.log(totalAge);

    },
    min: function(){
        const min = ages.reduce((min, age)=> (age < min? age: min), ages[0])
        console.log(min);
    },
    max: function(){
        const max = ages.reduce((max, age) => (age > max ?  age : max), ages[0])
        console.log(max);

    },
    range: function(){
        const max = ages.reduce((max, age) => (age > max ?  age : max), ages[0]);
        const min = ages.reduce((min, age)=> (age < min? age: min), ages[0]);
        const range = max - min
        console.log(range);     
    },
    mean: function(){
        const sum = ages.reduce((acc, curr)=> acc + curr, 0);
        const mean = sum/ages.length;
        console.log(mean);

    },
    median: function(){
        const sortedages = ages.slice().sort((a, b) => a-b);

        const middleIndex = Math.floor(sortedages.length/2)
        
        if(middleIndex % 2 == 0){
            console.log(sortedages[middleIndex])    
        }    

    },
    mode: function(){
        const countMap = {};
        let maxCount = 0;
        let mode;
    // Count occurrences of each age
        for (const age of ages) {
        countMap[age] = (countMap[age] || 0) + 1;

      // Update mode and maxCount if needed
        if (countMap[age] > maxCount) {
        maxCount = countMap[age];
        mode = age;
      }
    }

    const result = { mode, count: maxCount };
    console.log(result);

    }, 
    variance:function () {
        // Calculate the mean (average) of the ages
        const mean = ages.reduce((sum, age) => sum + age, 0) / ages.length;
    
        // Calculate the squared difference from the mean for each age
        const squaredDifferences = ages.map(age => Math.pow(age - mean, 2));
    
        // Calculate the variance as the average of squared differences
        const variance = squaredDifferences.reduce((sum, squaredDiff) => sum + squaredDiff, 0) / ages.length;
    
        console.log(variance)
      },

      standardDeviation: function () {
        // Calculate the mean (average) of the ages
        const mean = ages.reduce((sum, age) => sum + age, 0) / ages.length;
    
        // Calculate the squared difference from the mean for each age
        const squaredDifferences = ages.map(age => Math.pow(age - mean, 2));
    
        // Calculate the variance as the average of squared differences
        const variance = squaredDifferences.reduce((sum, squaredDiff) => sum + squaredDiff, 0) / ages.length;
    
        // Calculate the standard deviation as the square root of the variance
        const standardDeviation = Math.sqrt(variance);
    
        console.log(standardDeviation);
      },

      frequencyDistribution:  function () {
        const frequencyMap = {};
    
        // Count occurrences of each age
        for (const age of ages) {
          frequencyMap[age] = (frequencyMap[age] || 0) + 1;
        }
    
        // Display the frequency distribution
        console.log("Age   Frequency");
        console.log("----------------");
        for (const [age, frequency] of Object.entries(frequencyMap)) {
          console.log(`${age}     ${frequency}`);
        }
      }

}
  
statics.count();
statics.sum()
statics.min()
statics.range()
statics.mean()
statics.median()
statics.mode()
statics.variance()
statics.standardDeviation()
statics.frequencyDistribution()





