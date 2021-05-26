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
async function saveLifestyleFormHandler(event) {
  event.preventDefault();
  
  //-------------------- Lifestyle Budget --------------------//

  const entertainment_amount = document.querySelector('input[id="entertainment-budget"]').value;
  const clothing_amount = document.querySelector('input[id="clothing-budget"]').value;
  const travel_amount = document.querySelector('input[id="travel-budget"]').value;
  const dining_amount = document.querySelector('input[id="dining-budget"]').value;

  saveBudgetForm("Entertainment", entertainment_amount, 4);
  saveBudgetForm("Clothing", clothing_amount ,4);
  saveBudgetForm("Travel", travel_amount , 4);
  saveBudgetForm("Dining", dining_amount , 4);
 
}



document.getElementById('save-lifestyle-btn').addEventListener('click', saveLifestyleFormHandler);