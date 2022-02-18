// function incomeBalance() {
//     let incomeField = document.getElementById('income-field')
//     let incomeValue = incomeField.value
//     let balanceField = document.getElementById('balance-field')
//     let balanceValue = balanceField.value}
// 


function calculation() {
    let foodExpenses = document.getElementById('food-input').value;

    let rentExpenses = document.getElementById('rent-input').value;

    let clothesExpenses = document.getElementById('clothes-input').value;

    let totalExp = parseFloat(foodExpenses) + parseFloat(rentExpenses) + parseFloat(clothesExpenses)


    let expensesField = document.getElementById('expenses-field')
    expensesField.value = totalExp

    let incomeField = document.getElementById('income-field')
    let incomeValue = incomeField.value
    let balanceField = document.getElementById('balance-field')
    balanceField.value = incomeValue - totalExp
    // balanceValue = incomeValue - totalExp
}
document.getElementById('save-button').addEventListener(
    'click', function () {
        // incomeBalance()
        let incomeField = document.getElementById('income-field')
        let incomeValue = incomeField.value
        let balanceField = document.getElementById('balance-field')
        let balanceValue = balanceField.value

        let saveField = document.getElementById('save-field')
        let saveValue = saveField.value

        let savingCalulation = (incomeValue * saveValue) / 100
        let savingAmount = document.getElementById('saving-amount')
        savingAmount.value = savingCalulation

        let remainingAmount = document.getElementById('remaining-amount')
        remainingAmount.value = balanceValue - savingCalulation


    }
)

