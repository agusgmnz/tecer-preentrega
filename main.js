const carForm = document.getElementById("carForm");
const carModelSelect = document.getElementById("carModel");
const cuotasInput = document.getElementById("cuotas");
const totalDiv = document.getElementById("total");

const carData = {
  car1: 4000000,
  car2: 15000000,
  car3: 20000000,
};

function calculateTotal() {
  const carModel = carModelSelect.value;
  const cuotas = parseInt(cuotasInput.value);
  const precio = carData[carModel];

  if (precio && cuotas) {
    const total = precio / cuotas;
    totalDiv.textContent = `El valor de cada cuota (por mes) del auto elegido es de: $${total.toFixed(
      2
    )}`;

    const data = { carModel, cuotas, total };
    localStorage.setItem("carData", JSON.stringify(data));
  }
}

window.addEventListener("load", function () {
  const savedData = localStorage.getItem("carData");
  if (savedData) {
    const data = JSON.parse(savedData);
    carModelSelect.value = data.carModel;
    cuotasInput.value = data.cuotas;
    totalDiv.textContent = `El valor de cada cuota es: $${data.total.toFixed(
      2
    )}`;
  }
});

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
