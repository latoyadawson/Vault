async function loadBudgetFormHandler(event) {
  event.preventDefault();

  const savingIndex = []

      // const id = window.location.toString().split('/')[
      //   window.location.toString().split('/').length -1];
  // const budget_amount = document.querySelector('input[name="post-title"]').value;

  const response = await fetch(`/api/dashboard/:id`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }

    for(var i = 0; i < =.length; i++) {
      
  }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

//replace tbd with class or id 
// document.querySelector('.btn-xxl-dashboard').addEventListener('click', loadBudgetFormHandler);