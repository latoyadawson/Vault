async function saveHousingFormHandler(event) {
  event.preventDefault();

  //-------------------- Housing Budget --------------------//

  const mortgage_amount = document.querySelector('input[id="mortgage-rent-budget"]').value;
  const utilities_amount = document.querySelector('input[id="utilities-budget"]').value;
  const repairs_amount = document.querySelector('input[id="repairs-budget"]').value;
  const remodeling_amount = document.querySelector('input[id="remodeling-budget"]').value;
  const propertyTax_amount = document.querySelector('input[id="property-taxes-budget"]').value;

  saveBudgetForm("Mortgage | Rent",mortgage_amount , 2);
  saveBudgetForm("Utilities", utilities_amount,2);
  saveBudgetForm("Repairs",repairs_amount , 2);
  saveBudgetForm("Remodeling", remodeling_amount, 2);
  saveBudgetForm("Property Taxes", propertyTax_amount , 2);

    
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

document.getElementById('save-housing-btn').addEventListener('click', saveHousingFormHandler);