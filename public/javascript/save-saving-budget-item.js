async function saveSavingFormHandler(event) {
  event.preventDefault();
    
  //-------------------- Saving Budget --------------------//
  const saving_amount = document.querySelector('input[id="savings-budget"]').value;
  const checking_amount = document.querySelector('input[id="checking-budget"]').value;
  const investment_amount = document.querySelector('input[id="investment-budget"]').value;
  const retirement_amount = document.querySelector('input[id="retirement-budget"]').value;

  saveBudgetForm("Savings Account", saving_amount, 1);
  saveBudgetForm("Checking Account", checking_amount,1);
  saveBudgetForm("Investment Account", investment_amount, 1);
  saveBudgetForm("Retirement Account", retirement_amount, 1);
 
}

async function saveBudgetForm(budget_name, amount, category) {
 
  const response = await fetch(`/api/budgets`, {
    method: 'POST',
    body: JSON.stringify({
      name: budget_name,
      budget_amount: amount,
      category_id: category


    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    console.log(response.statusText);
  }
    
};

document.getElementById('save-savings-btn').addEventListener('click', saveSavingFormHandler);