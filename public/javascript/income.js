const incomeInput = document.getElementById("income");
const incomeForm = document.getElementById("incomeForm");

const incomeAmount = document.getElementById("incomeAmount");
const balanceAmount = document.getElementById("balanceAmount");

function getBudgetAmount(amount) {
  if (!amount) {
    incomeInput.style.border = "1px solid #b80c09";
    incomeInput.placeholder = "input can not be empty";
    incomeInput.style.color = "#b80c09";
    setTimeout(() => {
      incomeInput.style.color = "#495057";
      incomeInput.style.border = "1px solid gray";
    }, 3000);
  } else {
    incomeAmount.innerText = amount;
    balanceAmount.innerText = amount;
    expenseForm.style.display = "block";
    budgetform.style.display = "none";
    editForm.style.display = "none";
    incomeInput.value = "";
  }
}

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getincomeAmount(incomeInput.value);
});
