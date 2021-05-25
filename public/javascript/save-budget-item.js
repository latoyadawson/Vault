async function saveBudgetFormHandler(event) {
    event.preventDefault();
  
    const budget_amount = document.querySelector('input[name="budget-amount"]').value;
  
    const response = await fetch(`/api/budgets`, {
      method: 'POST',
      body: JSON.stringify({
        budget_amount,
        date
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
document.querySelector('#save-budget-btn').addEventListener('submit', saveBudgetFormHandler);
  