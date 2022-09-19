const $questionEl = document.getElementById("question"),
  $inputEl = document.getElementById("input"),
  $puntajeEl = document.getElementById("score"),
  $categoria = document.getElementById("categoria"),
  $resultado = document.getElementById("resultado"),
  $form = document.getElementById("form");
console.log($resultado);

const num2 = Math.ceil(Math.random() * 12);
num1 = Math.ceil(Math.random() * 12);
let puntaje = JSON.parse(localStorage.getItem("puntaje"));

if (!puntaje) {
  puntaje = 0;
}

$puntajeEl.innerText = `Puntuaje: ${puntaje}`;
$questionEl.innerText = `¿Cuantos es ${num1} multiplicado por ${num2}? `;

const respCorrecta = num1 * num2;

$form.addEventListener("submit", () => {
  const respUsuario = +$inputEl.value;
  if (respUsuario === respCorrecta) {
    puntaje++;
    updateLocalStorage();
  } else {
    puntaje--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("puntaje", JSON.stringify(puntaje));
}
