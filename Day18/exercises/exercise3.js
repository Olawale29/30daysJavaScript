const fetchCats = async () =>{
    try{
        const response = await fetch(catsAPI)
        const cats = await response.json()
        const metricValues = cats.map((obj) =>{
            let parts = obj.weight.metric.split('-').map((value) => Number(value.trim()));
            return (parts[0] + parts[1])/2

        })
        let avgWeight = metricValues.reduce((sum, value) => sum + value, 0)/metricValues.length;
        console.log(`The average weight of cat in metric unit is ${avgWeight} gramms`);
    }catch(err){
        console.log(err);
    }
}
fetchCats()


fetch(countriesAPI)
.then((response) => response.json())
.then((data) =>{
    const sortCountries = data.sort((a,b) => b.area-a.area)
    const topTenCountries = sortCountries.slice(0,10)
    console.log("Top ten countries are:");
    topTenCountries.forEach((country) =>{
        console.log(country.name);
    })
  

   
})


const totalNumber = async () => {
    try {
      const response = await fetch(countriesAPI);
      const data = await response.json();
  
      const langNames = data.reduce((acc, obj) => {
        // Check if the country has official languages
        if (obj.languages && obj.languages.length > 0) {
          // Iterate through each official language of the country
          obj.languages.forEach(language => {
            // Add the language to the array if it's not already present
            if (!acc.includes(language.name)) {
              acc.push(language.name);
            }
          });
        }
        return acc;
      }, []);
  
      const totalLan = langNames.length;
      console.log("Total number of official languages worldwide:", totalLan);
    } catch (err) {
      console.log(err);
    }
  };
  
  totalNumber();
  
