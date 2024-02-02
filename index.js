// 1) Crea un tabellone per la tombola formato da 76 celle, da 1 a 76
// 2) Crea un bottone per simulare l'estrazione di un numero: dovrà selezionare un numero random da 1 a 76
// 3) Dopo il click del bottone, evidenzia la cella corrispondente sul tabellone (quella con lo stesso numero), cambiando colore di sfondo
// 4) Mantieni evidenziate le celle corrispondenti ai numeri precedentemente estratti dopo ogni nuova estrazione

const arr = [];

const createNumbers = function () {
  const cellsContainer = document.getElementById("cells-container");

  for (let i = 0; i < 76; i++) {
    const numberCellDiv = document.createElement("div");
    numberCellDiv.className = "number";
    numberCellDiv.style = "padding: 2rem; display: inline-block; height: 100%; width: 2.5rem;";
    const num = numberCellDiv;

    const numberCellH3 = document.createElement("h3");
    numberCellH3.innerText = i + 1;

    numberCellDiv.appendChild(numberCellH3);
    cellsContainer.appendChild(numberCellDiv);

    //     if (document.getElementById("numeroestratto") === num[i]) {
    //       num.style = "padding: 2rem; display: inline-block; height: 100%; width: 2.5rem; background-color: red;";
    //     }
  }
};

const button = document.querySelector("button");
button.onclick = () => {
  const randomNumber = document.getElementById("numeroestratto");
  randNum = randomNumber.innerText = "Numero estratto: " + Math.floor(Math.random() * 76 + 1);
};

window.onload = function () {
  createNumbers();
};
