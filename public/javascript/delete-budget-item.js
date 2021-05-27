async function deleteBudgetAmountHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length -1
    ];
  
    const response = await fetch(`/api/budgets/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
          //grab the id of the budget items
         BudgetItems_id: id
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
  
}
  
document.querySelector('#delete-budget-amount').addEventListener('click', deleteBudgetAmountHandler);