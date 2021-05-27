async function loadBudgetFormHandler(event) {
  event.preventDefault();

      // const id = window.location.toString().split('/')[
      //   window.location.toString().split('/').length -1
  // const budget_amount = document.querySelector('input[name="post-title"]').value;

  const response = await fetch(`/api/budgets/${id}`, {
    method: 'GET',
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
document.querySelector('.modal-btn').addEventListener('click', loadBudgetFormHandler);