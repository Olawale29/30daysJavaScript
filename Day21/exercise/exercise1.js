let firstParagraph = document.querySelector('p')
console.log(firstParagraph.textContent);

const paragraph1 = document.querySelector('#p1')
const paragraph2 = document.querySelector('#p2')
const paragraph3 = document.querySelector('#p3')
const paragraph4 = document.querySelector('#p4')
console.log(paragraph1, paragraph2, paragraph3, paragraph4);

const allParagraphs = document.querySelectorAll('p')
console.log(allParagraphs);

allParagraphs.forEach((p) => {
    console.log(p.textContent);
})

allParagraphs[3].textContent = 'I love you';

allParagraphs[0].setAttribute('class','para1');
allParagraphs[1].setAttribute('id', 'paragraph2');
allParagraphs[2].setAttribute('class', 'para3');
allParagraphs[3].setAttribute('id', 'paragraph4');

