/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const outputEl = document.getElementById("output");
const btnEl = document.getElementById("btn");

btnEl.addEventListener("click", () => {
  // litle extra while loading
  outputEl.innerHTML = `<div></div><img
  src="https://i.stack.imgur.com/hzk6C.gif"
  alt="loading"
/>`;
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((json) => {
      outputEl.innerHTML = "";
      json.map((element) => {
        createOneCard(element.avatar_url, element.login);
      });
    });

  console.log("paspaudziau");
});

// Elemento kurimo funkcija su ivedimu i DOM'a
function createOneCard(imgUrl, name) {
  // main div User Card
  let userDivCard = document.createElement("div");
  userDivCard.classList.add("userCard");

  // img div
  let imgDiv = document.createElement("div");
  imgDiv.classList.add("profileCircle");

  //   img El
  let imgEl = document.createElement("img");
  imgEl.classList.add("profileImg");
  imgEl.src = imgUrl;

  // h3 el
  let h3El = document.createElement("h3");
  h3El.textContent = name;

  // a element
  let aEl = document.createElement("a");
  aEl.href = imgUrl;
  aEl.textContent = imgUrl;

  // apendinu img i imgDiv
  imgDiv.append(imgEl);

  //   apendinu visus elementus i carda
  userDivCard.append(imgDiv, h3El, aEl);

  //   apendinu i DOM'a
  outputEl.appendChild(userDivCard);
}
