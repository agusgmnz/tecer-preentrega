  const form = document.getElementById('simulatorForm');
  const resultContainer = document.getElementById('resultContainer');
  const resultElement = document.getElementById('result');
  const loanListElement = document.getElementById('loanList');

  const savedLoans = JSON.parse(localStorage.getItem('loans')) || [];

  savedLoans.forEach(loan => {
    const listItem = document.createElement('li');
    listItem.textContent = `Monto: $${loan.amount.toFixed(2)}, Tasa de Interés: ${loan.interestRate}%, Meses: ${loan.months}`;
    loanListElement.appendChild(listItem);
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const amount = parseFloat(document.getElementById('amount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const months = parseInt(document.getElementById('months').value);

    const monthlyPayment = calculateMonthlyPayment(amount, interestRate, months);

    resultElement.innerHTML = `La cuota mensual es: $${monthlyPayment.toFixed(2)}`;
    resultContainer.style.display = 'block';

    const loan = { amount, interestRate, months };
    savedLoans.push(loan);
    localStorage.setItem('loans', JSON.stringify(savedLoans));

    const listItem = document.createElement('li');
    listItem.textContent = `Monto: $${loan.amount.toFixed(2)}, Tasa de Interés: ${loan.interestRate}%, Meses: ${loan.months}`;
    loanListElement.appendChild(listItem);
  });

  function calculateMonthlyPayment(amount, interestRate, months) {
    const monthlyInterestRate = interestRate / 100 / 12;
    const numerator = amount * monthlyInterestRate * (1 + monthlyInterestRate) ** months;
    const denominator = (1 + monthlyInterestRate) ** months - 1;
    return numerator / denominator;
  }

let selectedRating = 0;

function setRating(rating) {
  selectedRating = rating;

  const stars = document.getElementsByClassName("star");
  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove("selected");
  }

  for (let i = 0; i < rating; i++) {
    stars[i].classList.add("selected");
  }
}

function submitRating() {
  if (selectedRating > 0) {
    alert(
      `Gracias por tu calificación: ${selectedRating} estrellas, te esperamos pornto`
    );
  } else {
    alert("Por favor, selecciona una calificación");
  }
}
