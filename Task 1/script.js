/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

// kintamieji
let formEl = document.querySelector("form");
let inputEl = document.getElementById("search");
let outputEl = document.getElementById("output");

// forma su nuskaitymu submit (event listeneris)
// - formoje nuskaitom input value
formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  // input value eina per aprasyta skaiciuokle
  OutputGenerate(inputEl.value);
});

// funkcija skaiciavimams ir html ivedimui
function OutputGenerate(inputValue) {
  // is karto isvalau div innerHTML
  outputEl.innerHTML = "";

  // generuoju html elementus
  const olEl = document.createElement("ol");
  const liEl1 = document.createElement("li");
  const liEl2 = document.createElement("li");
  const liEl3 = document.createElement("li");

  // irasau kintamas reiksmes
  liEl1.textContent = `${inputValue} Kg yra ${(inputValue * 2.2046).toFixed(
    2
  )} Svarai (lb) | Formulė: lb = kg * 2.2046`;
  liEl2.textContent = `${inputValue} Kg yra ${(inputValue * 0.001).toFixed(
    2
  )} Gramai (g) | Formulė: g = kg / 0.0010000`;
  liEl3.textContent = `${inputValue} Kg yra ${(inputValue * 35.274).toFixed(
    2
  )} Uncijos (oz) | Formulė: oz = kg * 35.274`;

  // list itemai i order lista
  olEl.append(liEl1, liEl2, liEl3);

  // order listas i output diva
  outputEl.append(olEl);
}
