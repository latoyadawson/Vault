

async function saveSavingFormHandler(event) {
  console.log("hi");
  event.preventDefault();
    
  //-------------------- Saving Budget --------------------//
  const saving_amount = document.querySelector('input[id="savings-budget"]').value;
  const checking_amount = document.querySelector('input[id="checking-budget"]').value;
  const investment_amount = document.querySelector('input[id="investment-budget"]').value;
  const retirement_amount = document.querySelector('input[id="retirement-budget"]').value;

  await saveBudgetForm("Savings Account", saving_amount, 1);
  await saveBudgetForm("Checking Account", checking_amount,1);
  await saveBudgetForm("Investment Account", investment_amount, 1);
  await saveBudgetForm("Retirement Account", retirement_amount, 1);
 
}

async function saveHousingFormHandler(event) {
  event.preventDefault();

  //-------------------- Housing Budget --------------------//

  const mortgage_amount = document.querySelector('input[id="mortgage-rent-budget"]').value;
  const utilities_amount = document.querySelector('input[id="utilities-budget"]').value;
  const repairs_amount = document.querySelector('input[id="repairs-budget"]').value;
  const remodeling_amount = document.querySelector('input[id="remodeling-budget"]').value;
  const propertyTax_amount = document.querySelector('input[id="property-taxes-budget"]').value;

  await saveBudgetForm("Mortgage | Rent",mortgage_amount , 2);
  await saveBudgetForm("Utilities", utilities_amount,2);
  await saveBudgetForm("Repairs",repairs_amount , 2);
  await saveBudgetForm("Remodeling", remodeling_amount, 2);
  await saveBudgetForm("Property Taxes", propertyTax_amount , 2);

    
}

async function saveTransportationFormHandler(event) {
  event.preventDefault();

  //-------------------- Transportation Budget --------------------//

  const vehicle_amount = document.querySelector('input[id="vehicle-budget"]').value;
  const gas_amount = document.querySelector('input[id="gas-budget"]').value;
  const publicTransportation_amount = document.querySelector('input[id="public-transportation-budget"]').value;
  const carInsurance_amount = document.querySelector('input[id="insurance-budget"]').value;

  await saveBudgetForm("Vehicle Payment",vehicle_amount , 3);
  await saveBudgetForm("Gas", gas_amount,3);
  await saveBudgetForm("Public Transportation", publicTransportation_amount , 3);
  await saveBudgetForm("Car Insurance", carInsurance_amount , 3);
 
}

async function saveLifestyleFormHandler(event) {
  event.preventDefault();
  
  //-------------------- Lifestyle Budget --------------------//

  const entertainment_amount = document.querySelector('input[id="entertainment-budget"]').value;
  const clothing_amount = document.querySelector('input[id="clothing-budget"]').value;
  const travel_amount = document.querySelector('input[id="travel-budget"]').value;
  const dining_amount = document.querySelector('input[id="dining-budget"]').value;

  await saveBudgetForm("Entertainment", entertainment_amount, 4);
  await saveBudgetForm("Clothing", clothing_amount ,4);
  await saveBudgetForm("Travel", travel_amount , 4);
  await saveBudgetForm("Dining", dining_amount , 4);
 
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


// document.getElementById('save-savings-btn').addEventListener('click', saveSavingFormHandler);
// document.getElementById('save-housing-btn').addEventListener('click', saveHousingFormHandler);
// document.getElementById('save-transportation-btn').addEventListener('click', saveTransportationFormHandler);
document.getElementById('save-lifestyle-btn').addEventListener('click', saveLifestyleFormHandler);
