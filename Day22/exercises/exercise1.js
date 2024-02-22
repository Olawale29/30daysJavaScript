const main = document.querySelector('.wrapper')
const divContainer = document.querySelector('div')

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
    for(let i = 2; i<Math.sqrt(number); i++){
        if(number % i === 0){
            return false
        }
    }
    return true
}

const generateNum = (parentElement, childElStyle) =>{
    for(let i = 0; i< 102; i++){
        const number = document.createElement('div')
        number.classList.add('number', 'm-1')
        Object.assign(number.style, childElStyle);
        number.textContent = i

        if (isPrime(i)) number.style.backgroundColor = 'red';
        else if (i % 2 === 0) number.style.backgroundColor = 'green';
        else number.style.backgroundColor = 'yellow';
        parentElement.appendChild(number);
    }
}
generateNum(divContainer, numStyle);