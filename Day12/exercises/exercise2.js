let paragraph = "I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love."

function tenMostFrequentWords(inputString) {
    const cleanedString = inputString.toLowerCase().replace(/[^\w\s]/g, '');
    const words = cleanedString.split(/\s+/);
  
    const wordFrequency = {};
  
    words.forEach(word => {
      if (word in wordFrequency) {
        wordFrequency[word]++;
      } else {
        wordFrequency[word] = 1;
      }
    });
  
    const sortedWords = Object.keys(wordFrequency).sort((a, b) => wordFrequency[b] - wordFrequency[a]);
  
    const topTenWords = sortedWords.slice(0, 10);
  
    const resultArray = topTenWords.map(word => ({ word, count: wordFrequency[word] }));
  
    return resultArray;
  }
  
console.log(tenMostFrequentWords(paragraph));




