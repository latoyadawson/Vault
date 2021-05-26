

async function saveBudgetFormHandler(event) {
  // alert(req.session.user_id,);
    event.preventDefault();
    // const category_id = document.querySelector('#expForm'),
    const saving_amount = document.querySelector('input[id="savings-budget"]').value;
    const checking_amount = document.querySelector('input[id="checking-budget"]').value;
    const investment_amount = document.querySelector('input[id="investment-budget"]').value;
    const retirement_amount = document.querySelector('input[id="retirement-budget"]').value;
  
    await saveBudgetForm("Savings Account", saving_amount, 1);
    await saveBudgetForm("Checking Account", checking_amount,1);
    await saveBudgetForm("Investment Account", investment_amount, 1);
    await saveBudgetForm("Retirement Account", retirement_amount, 1);
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
    alert(response.statusText);
  }
    
};


//replace tbd with class or id 
document.getElementById('save-budget-btn').addEventListener('click', saveBudgetFormHandler);
