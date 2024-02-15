const countriesAPI  ='https://restcountries.com/v2/all'
fetch(countriesAPI)
.then((response) => response.json())
.then((data)=>{
    data.forEach((country) =>{
        console.log(country);
        console.log('Country:',country.name, 'Capital:', country.capital, 'Language(s)', country.languages, 'Population: ', country.population, 'Area:', country.area);

    })
})
.catch((error)=>{
    console.error(error);
})



