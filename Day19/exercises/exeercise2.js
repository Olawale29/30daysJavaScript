function outerFunction(){
    let count = 0
    function plusOne(){
        count++
        return count
    }
    function timesTwo(){
        count*=2
        return count
    }
    function minusOne(){
        count--
        return count
    }
    return {
        plusOne: plusOne(),
        timesTwo: timesTwo(),
        minusOne: minusOne()
    }
}
const innerFuncs = outerFunction();
console.log(innerFuncs.plusOne);
console.log(innerFuncs.timesTwo);
console.log(innerFuncs.minusOne);