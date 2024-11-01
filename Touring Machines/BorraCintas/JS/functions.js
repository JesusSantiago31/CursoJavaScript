let tapeArray = [];
let currentPosition = 0;
let currentState = "A"; // Inicia directamente en el estado A
let history = [];
let initialTapeArray = [];
let initialPosition = 0;

// Función para inicializar la cinta
function initializeTape() {
  const input = document.getElementById("tapeInput").value;
  const positionInput = document.getElementById("headPosition").value;
  const headPosition = parseInt(positionInput, 10);

  if (
    /^[01" "]+$/.test(input) &&
    !isNaN(headPosition) &&
    headPosition >= 0 &&
    headPosition < input.length
  ) {
    tapeArray = input.split("");
    initialTapeArray = [...tapeArray];
    currentPosition = headPosition;
    initialPosition = headPosition;
    currentState = "A";
    history = [];
    updateStateDisplay();
    displayTape();
  } else {
    alert(
      "Por favor, ingrese una cinta válida de 0 y 1, y una posición válida para el cabezal."
    );
  }
}

// Función para mostrar la cinta actual
function displayTape() {
  const tapeDiv = document.getElementById("tape");
  tapeDiv.innerHTML = "";
  tapeArray.forEach((symbol, index) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = symbol;
    if (index === currentPosition) {
      cell.classList.add("highlight");
    }
    tapeDiv.appendChild(cell);
  });
}

// Función para actualizar el estado visualmente en la ruleta
function updateStateDisplay() {
  document
    .querySelectorAll(".state")
    .forEach((el) => el.classList.remove("active-state"));
  document
    .querySelector(`.state[data-state="${currentState}"]`)
    .classList.add("active-state");
}

// Función para avanzar un paso según el estado actual
function nextStep() {
  if (tapeArray.every((symbol) => symbol === "0")) {
    alert("La cinta ha sido borrada completamente.");
    return;
  }

  if (currentPosition >= tapeArray.length) {
    tapeArray.push("0");
  }

  if (currentPosition < 0) {
    alert("La cinta ha alcanzado el límite izquierdo.");
    currentPosition = 0;
    return;
  }

  history.push({
    tape: [...tapeArray],
    position: currentPosition,
    state: currentState,
  });

  const symbol = tapeArray[currentPosition];

  switch (currentState) {
    case "A":
      if (symbol === "1") {
        tapeArray[currentPosition] = "0";
        currentPosition--;
        currentState = "B";
      } else if (symbol === " ") {
        tapeArray[currentPosition] = " ";
        currentPosition++;
        currentState = "E";
      } else {
        currentPosition--;
      }
      break;
    case "B":
      tapeArray[currentPosition] = "0";
      currentPosition++;
      currentState = "C";
      break;
    case "C":
      if (symbol === "1") {
        tapeArray[currentPosition] = "0";
        currentPosition++;
        currentState = "D";
      } else {
        currentPosition++;
      }
      break;
    case "D":
      tapeArray[currentPosition] = "1";
      currentPosition--;
      currentState = "A";
      break;
    case "E":
      tapeArray[currentPosition] = "0";
      currentPosition++;
      currentState = "F";
      break;
    case "F":
      tapeArray[currentPosition] = "0";
      currentPosition++;
      currentState = "F";
      break;
  }

  updateStateDisplay();
  displayTape();
}

// Función para retroceder un paso
function previousStep() {
  if (history.length > 0) {
    const lastState = history.pop();
    tapeArray = lastState.tape;
    currentPosition = lastState.position;
    currentState = lastState.state;
    updateStateDisplay();
    displayTape();
  } else {
    alert("No hay más pasos para retroceder.");
  }
}

// Función para reiniciar la cinta al estado inicial
function resetTape() {
  tapeArray = [...initialTapeArray];
  currentPosition = initialPosition;
  currentState = "A";
  history = [];
  updateStateDisplay();
  displayTape();
}
