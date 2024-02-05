let sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?"

const cleanText = (sentence) =>{
    const cleanText = sentence.replace(/[^\w\s]/g, '')

    return cleanText

}
console.log(cleanText(sentence));


let input = "I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher"

const topThreeWords = (inputString) =>{
    const cleanedString = inputString.replace(/[^\w\s]/)
    const words = cleanedString.split(/\s/)

    const wordObject = {}

    words.forEach((text) =>{
        if(text in wordObject){
            wordObject[text]++
        }else{
            wordObject[text] = 1
        }

    });
    const sortedString = Object.keys(wordObject).sort((a, b) =>(wordObject[b] - wordObject[a]))

    const topThreeText = sortedString.slice(0,3)

    const result = topThreeText.map((text) => ({text, count: wordObject[text]}))

    return result

}
console.log(topThreeWords(input));