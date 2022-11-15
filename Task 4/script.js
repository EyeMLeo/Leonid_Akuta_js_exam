/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
let outputEl = document.getElementById("output");

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((json) => {
    json.map((oneBrand) => {
      createCard(oneBrand.brand, oneBrand.models);
    });
  });

//   function for card creation
function createCard(brand, models) {
  // main card div
  const oneCardEl = document.createElement("div");
  oneCardEl.classList.add("oneCard");

  //   h2 element
  const h2el = document.createElement("h2");
  h2el.textContent = brand;

  // div for produced cars
  const carModels = document.createElement("div");
  carModels.classList.add("producedCars");

  //   funkcija masinu modeliams
  models.map((oneProducedModel) => {
    // p elementas
    const pEl = document.createElement("p");
    pEl.textContent = oneProducedModel;

    console.log("pEl ===", pEl);

    // apendinu modeli i produced cars diva
    carModels.appendChild(pEl);
    console.log("carModels ===", carModels);
  });

  //   h2 and p to main card
  oneCardEl.appendChild(h2el);
  oneCardEl.appendChild(carModels);

  outputEl.appendChild(oneCardEl);
  console.log("oneCardEl ===", oneCardEl);
}
