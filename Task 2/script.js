/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

// 2 contantos
// - paspaudimo mygtukas
const btnEl = document.getElementById("btn__element");
// -  Score atvaizdavimas
const btnStateEl = document.getElementById("btn__state");

// mygtuko nuskaitymo funkcija
btnEl.addEventListener("click", () => {
  // - nuskaitom score atvaizduota reiksme
  let btnStateElValue = btnStateEl.textContent;

  // - prie nuskaitytos reiksmes pridedam 1
  // - atvaizduojam nauja score reiksme
  btnStateEl.textContent = +btnStateElValue + 1;
});
