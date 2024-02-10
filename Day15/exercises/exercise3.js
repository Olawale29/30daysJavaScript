const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class statistics{
    constructor(count, sum, min, max, range, mean, median, mode, variance, std, freqDist){
        this.count = count
        this.sum = sum
        this.min = min
        this.max = max
        this.range = range
        this.mean = mean
        this.median = median
        this.mode = mode
        this.variance = variance
        this.std = std
        this.freqDist = freqDist
    }
    get getCount(){
        return this.count
    }
    get getSum(){
        return this.sum
    }
    get getMin(){
        return this.min
    }
    get getMax(){
        return this.max
    }
    get getRange(){
        return this.range
    }
    get getMean(){
        return this.mean
    }
    get getMedian(){
        return this.median
    }
    get getMode(){
        return this.mode
    }
    get getVariance(){
        return this.variance
    }
    get getStd(){
        return this.std
    }
    get getFreqDist(){
        return this.freqDist
    }

    static count(){
        const Count = ages.length
        return Count
    }
    static sum(){
        let total = 0
        ages.forEach((age)=>{
            total+=age
        });
        return total
    }
    static Min(){
        const min = Math.min(...ages)
        return min
    }
    static Max(){
        const max = Math.max(...ages)
        return max
    }
    static Range(){
        const min = Math.min(...ages)
        const max = Math.max(...ages)
        const range = max - min
        return range

    }
    static Mean(){
        let total = 0
        ages.forEach((age)=>{
            total+=age
                
        });
        return Math.ceil(total/ages.length)
        
    }
    static Median(){
        ages.sort((a,b) => a-b);
        const count = ages.length
        const middleIndex = Math.floor(count/2)
        if(count % 2 === 0){
            const median = (ages[middleIndex -1] + ages[middleIndex])/2
            return median
        }else{
            return ages[middleIndex]
        }
        
    }
    static Mode(){
        let freqMap = {}
        ages.forEach((element) =>{
            freqMap[element]  = (freqMap[element] || 0) + 1;

        });
        let modes = []
        let maxFreq = 0;

        for(const key in freqMap){
            if(freqMap[key] > maxFreq){
                modes = [key]
                maxFreq = freqMap[key]
            }else if(freqMap[key] === maxFreq){
                modes.push(key);
            }
        }
        return `{'modes':${modes}, 'count': ${maxFreq}}`
    }
    static Variance(){
        let total = 0
        ages.forEach((age)=>{
            total+=age
        });
        const mean = total/ages.length
        const squaredDiff = ages.map((age) => Math.pow(age-mean, 2))
        const variance = squaredDiff.reduce((sum, value) => sum + value, 0)/ages.length
        return variance.toFixed(1);
        
    }
    static Std(){
        let total = 0
        ages.forEach((age)=>{
            total+=age
        });
        const mean = total/ages.length
            const squaredDiff = ages.map((age) => Math.pow(age-mean, 2))
            const variance = squaredDiff.reduce((sum, value) => sum + value, 0)/ages.length
            const std = Math.sqrt(variance)
            return std.toFixed(1)

        
    }
    static freqDist(){
        let freqDist = {}
        ages.forEach((element) =>{
            freqDist[element]  = (freqDist[element] || 0) + 1;
        });
        return freqDist
    }





}
console.log('Count', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.Min())
console.log('Max: ', statistics.Max())
console.log('Range: ', statistics.Range()) 
console.log('Mean: ', statistics.Mean())
console.log('Median: ', statistics.Median())
console.log('Mode: ', statistics.Mode())
console.log('Variance: ',statistics.Variance())
console.log('Standard Deviation: ', statistics.Std())
console.log('Frequency Distribution: ',statistics.freqDist())

class PersonAccount{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        this.incomes = new Set()
        this.expenses = new Set()
    }
    addIncome(description, amount){
        this.incomes.add({description, amount})
    }
    addExpenses(description, amount){
        this.expenses.add({description, amount})
    }
    totalIncome(){
        return [...this.incomes].reduce((total, income) => total + income.amount,0)
    }
    totalExpenses(){
        return [...this.expenses].reduce((total, expenses) => total + expenses.amount,0)
    }
    accountBalance(){
        return this.totalIncome() - this.totalExpenses();
    }
    accountInfo() {
        let info = `Account Information for ${this.firstName} ${this.lastName}:\n`;
        info += `Total Income: $${this.totalIncome()}\n`;
        info += `Total Expenses: $${this.totalExpenses()}\n`;
        info += `Account Balance: $${this.accountBalance()}\n`;
        return info;
    }

    
}
const person = new PersonAccount("Oyegunle", "Emmanuel");
person.addIncome("Salary", 5000);
person.addIncome("Bonus", 1000);
person.addExpenses("Rent", 1500);
person.addExpenses("Utilities", 200);
console.log(person.accountInfo());
