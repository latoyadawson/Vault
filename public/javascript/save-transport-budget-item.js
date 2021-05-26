async function saveTransportationFormHandler(event) {
  event.preventDefault();

  //-------------------- Transportation Budget --------------------//

  const vehicle_amount = document.querySelector('input[id="vehicle-budget"]').value;
  const gas_amount = document.querySelector('input[id="gas-budget"]').value;
  const publicTransportation_amount = document.querySelector('input[id="public-transportation-budget"]').value;
  const carInsurance_amount = document.querySelector('input[id="insurance-budget"]').value;

  saveBudgetForm("Vehicle Payment",vehicle_amount , 3);
  saveBudgetForm("Gas", gas_amount,3);
  saveBudgetForm("Public Transportation", publicTransportation_amount , 3);
  saveBudgetForm("Car Insurance", carInsurance_amount , 3);

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

document.getElementById('save-transportation-btn').addEventListener('click', saveTransportationFormHandler);