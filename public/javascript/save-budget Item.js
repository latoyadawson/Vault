async function addBudgetFormHandler(event) {
    event.preventDefault();
  
    //const title = document.querySelector('input[name="post-title"]').value;
    const budgetAmountt = document.querySelector('input[name="content"]').value;
  
    const response = await fetch(`/api/budgets`, {
      method: 'PUT',
      body: JSON.stringify({
        budgeAmounts  
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
};

//replace tbd with class or id 
document.querySelector('.TBD').addEventListener('submit', saveBudgetFormHandler);
  