function calcExpenses() {
    let totalExp = 0;
    for (i = 0; i < details.length; i++) {
      totalExp = details[i].number + totalExp;
    }
    expensesAmount.innerText = totalExp;
    updateBalance();
}

function updateBalance() {
    balanceAmount.innerText =
      parseInt(budgetAmount.innerText) - parseInt(expensesAmount.innerText);
}
  