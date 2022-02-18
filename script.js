let incomeField = document.getElementById('income-field')
let expensesField = document.getElementById('expenses-field')
let balanceField = document.getElementById('balance-field')


// Income & Expense calculation
function calculation() {

    let foodInput = document.getElementById('food-input');
    let foodExpenses = foodInput.value
    let rentInput = document.getElementById('rent-input');
    let rentExpenses = rentInput.value
    let clothesInput = document.getElementById('clothes-input');
    let clothesExpenses = clothesInput.value
    let totalExp = parseFloat(foodExpenses) + parseFloat(rentExpenses) + parseFloat(clothesExpenses)

    expensesField.value = totalExp

    let incomeValue = incomeField.value

    balanceField.value = incomeValue - totalExp
    if (incomeField.value < 0 || foodInput.value < 0 || rentInput.value < 0 || clothesInput.value < 0) {
        const errmsg = document.getElementById('notify-error')
        errmsg.style.display = 'block'
        incomeField.value = 0
        foodInput.value = 0
        rentInput.value = 0
        clothesInput.value = 0
        expensesField.value = 0
        balanceField.value = 0
    }

}

// Saving calculation
document.getElementById('save-button').addEventListener(
    'click', function () {
        let incomeValue = incomeField.value

        let balanceValue = balanceField.value

        let saveField = document.getElementById('save-field')
        let saveValue = saveField.value

        let savingCalulation = (incomeValue * saveValue) / 100
        let savingAmount = document.getElementById('saving-amount')
        savingAmount.value = savingCalulation

        let remainingAmount = document.getElementById('remaining-amount')
        remainingAmount.value = balanceValue - savingCalulation
        if (savingAmount.value > remainingAmount.value) {
            const errmsg1 = document.getElementById('notify-error1')
            errmsg1.style.display = 'block'

        }

    }
)

