async function editBudgetFormHandler(event) {
    event.preventDefault();
  
    //const title = document.querySelector('input[name="post-title"]').value;
    const budget_amount = document.querySelector('input[name="post-title"]').value;
  
    const response = await fetch(`/api/budgets`, {
      method: 'PUT',
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
document.querySelector('.#edit-budget-btn').addEventListener('submit', editBudgetFormHandler);
  