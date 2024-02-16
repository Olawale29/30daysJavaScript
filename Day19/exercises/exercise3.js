function personAccount(){
    let firstName = 'Oyegunle'
    let lastName = 'Emmanuel'
    let incomes = new Map()
    let expenses = new Map()

    function addIncome(description, amount){
        return incomes.set(description, amount);
    }
    function addExpenses(description, amount){
       return expenses.set(description, amount);
    }
    function totalIncome(){
        return Array.from(incomes.values()).reduce((acc, income) => acc + income, 0)
    }
    function totalExpenses(){
        return Array.from(expenses.values()).reduce((acc, expenses) => acc + expenses, 0)
    }
    function accounBalance(){
        const acctBal = totalIncome() - totalExpenses()
        return acctBal;
    }
    function accountInfo(){
        return `${firstName} ${lastName}'s Account Info\n
        Total Income: ${totalIncome()}\n
        Total Expenses: ${totalExpenses()}\n
        Account Balance: ${accounBalance()}\n`
    }
    return {
        firstName,
        lastName,
        addIncome,
        addExpenses,
        totalIncome,
        totalExpenses,
        accounBalance,
        accountInfo
    };

}

const innerf = personAccount();
innerf.addIncome("Salary", 5000);
innerf.addIncome("Freelance", 3000);
innerf.addExpenses("Rent", 1000);
innerf.addExpenses("Utilities", 2000);
console.log(innerf.accountInfo());