const main =  document.querySelector('main')
const divContainer = document.querySelector('div');
const button = document.querySelector('button')
const p = document.querySelector('.paragraph')

const numStyle = {
    color: 'white',
    padding: '30px 0px',
    fontWeight: 700,
    fontSize: '28px',
    display: 'inline-block',
    gap: '8px',
    textAlign: 'center',
    width: '15%'
}

const isPrime = (number) =>{
    if(number < 2){
        return false
    }
    for(let i = 2; i < Math.sqrt(number); i++){
        if(number % i === 0){
            return false
        }
    }
    return true
}


function getNumbers(){
    const input = parseInt(document.querySelector('.input-text').value)  
    const generateNum = (parentElement, childElementStyle) =>{
        for(let i = 1; i <= input; i++){
            const number = document.createElement('div')
            number.classList.add('number', 'm-1')
            Object.assign(number.style, childElementStyle);
            number.textContent = i
            if(isPrime(i)){
                number.style.backgroundColor = 'red';
            }else if(i % 2 === 0){
                number.style.backgroundColor = 'green'
            }else{
                number.style.backgroundColor = 'yellow'
            }
            parentElement.appendChild(number)

        }
    }
    generateNum(divContainer, numStyle)
}



// input.addEventListener('input', (e) =>{
//     const generateNum = (parentElement, childElementStyle) =>{
//         let times =  parseInt(e.target.value)
//         for(let i = 0; i < times; i++){
//             const number = document.createElement('div')
//             number.classList.add('number', 'm-1')
//             Object.assign(number.style, childElementStyle);
//             number.textContent = i

//             if(isPrime(i)){
//                 number.style.backgroundColor = 'red';

//             }

//         }
//     }
// })