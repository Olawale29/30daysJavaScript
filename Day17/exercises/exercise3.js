const personAccount ={
    firstName: '',
    lastName: '',
    incomes: new Set(),
    expenses: new Set(),

    addIncome(description, amount){
        this.incomes.add({description, amount})
    },
    addExpenses(description, amount){
        this.expenses.add({description, amount})

    },
    totalIncome(){
        return [...this.incomes].reduce((total, incomes) => total + incomes.amount, 0)
    },
    totalExpenses(){
        return [...this.expenses].reduce((total, expenses) => total + expenses.amount,0);
    },
    accountBalance(){
        return this.totalIncome() - this.totalExpenses();

    },
    accountInfo(){
        let info = `Account Information for ${this.firstName} ${this.lastName}:\n`;
        info += `Total Income: $${this.totalIncome()}
        \n`;
        info +=`Total Expenses: $${this.totalExpenses()}\n`
        info += `Account Balance: $${this.accountBalance()}\n`;
        
        return info;
    }

}
personAccount.firstName = "Oyegunle";
personAccount.lastName = "Emmanuel";
personAccount.addIncome("Salary", 5000);
personAccount.addIncome("Bonus", 1000);
personAccount.addExpenses("Rent", 1500);
personAccount.addExpenses("Utilities", 200);
console.log(personAccount.accountInfo());





    
