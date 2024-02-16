function outerFunction(){
    let count = 0;
    function innerFunction(){
        count++;
        return count
    }
    return innerFunction
}
const innerFun = outerFunction()
console.log(innerFun());
console.log(innerFun());
console.log(innerFun());
