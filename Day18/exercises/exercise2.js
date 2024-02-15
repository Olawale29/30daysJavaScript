const catsAPI = 'https://api.thecatapi.com/v1/breeds'
const fetchData = async () => {
    try{
        const response = await fetch(catsAPI)
        const cats = await response.json()
        console.log(cats);
        cats.forEach((cat)=>{
            const catNames = cat.name
            console.log(catNames);
        })
    }catch(err){
        console.error(err);

    }
}
fetchData()