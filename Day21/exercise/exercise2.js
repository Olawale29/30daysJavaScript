paragraph1.style.color = 'blue';
paragraph2.style.background = '#00ffab'
paragraph2.style.border = '2px solid black'
paragraph3.style.fontSize ='30px'
paragraph3.style.color = 'red'
paragraph4.style.fontSize = '30px'
paragraph4.style.fontFamily = 'Arial, sans-serif';

const All = document.querySelectorAll('p')
All.forEach((para, p)=>{
    if(p % 2 === 0){
        para.style.color = 'green'        
    }else{
        para.style.color = 'red'
    }
})
paragraph1.textContent = 'My best Programming language is Php'
paragraph2.textContent = 'Enjoy your life'
paragraph3.textContent = 'Beleive in God and yourself'
paragraph4.textContent ='Make money'

All[0].setAttribute('class', 'pr1');
All[1].setAttribute('id', 'pr2');
All[2].setAttribute('class', 'pr3');
All[3].setAttribute('id', 'pr4');

