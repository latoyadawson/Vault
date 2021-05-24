async function addBudgetFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="content"]').value;
  
    const response = await fetch(`/api/budgets`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
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
document.querySelector('.TBD').addEventListener('submit', addBudgetFormHandler);
  