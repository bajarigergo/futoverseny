import { FUTOK } from "./adatok.js";

const Befutott = [];
letrehozTablazat();
osszesit();
befutott();
torolEsemeny();
ellenoriz();

// 1. feladat
function letrehozTablazat() {
  const feladat1_ELEM = document.querySelector("#feladat_1");
  let txt = "<table>";
  for (let index = 0; index < FUTOK.length; index++) {
    txt += `<tr>
                  <td>${FUTOK[index].nev}</td>
                  <td>${FUTOK[index].nemzetiseg}</td>
                  <td>${FUTOK[index].versenyIdo}</td>
                  <td>${FUTOK[index].versenySzam}</td>
              </tr>`;
  }
  txt += "</table>";
  feladat1_ELEM.innerHTML = txt;
}

// 2. feladat
function osszesit() {
  let tizkm = 0;
  let felmarathon = 0;
  let fullmarathon = 0;
  let txt = "";
  for (let index = 0; index < FUTOK.length; index++) {
    if (FUTOK[index].versenySzam === "10 km") {
      tizkm++;
    } else if (FUTOK[index].versenySzam === "félmaraton") {
      felmarathon++;
    } else {
      fullmarathon++;
    }
  }
  txt += `<p>10 km: ${tizkm} db</p>
  <p>félmaraton: ${felmarathon} db</p>
  <p>maraton: ${fullmarathon} db</p>`;
  const feladat2_ELEM = document.querySelector("#feladat_2");
  feladat2_ELEM.innerHTML = txt;
}

// 3. feladat
function befutott() {
  const versenyzok_ELEM = document.querySelectorAll("#feladat_1 tr");
  const feladat3_ELEM = document.querySelector("#feladat_3");
  let txt = "";
  for (let index = 0; index < versenyzok_ELEM.length; index++) {
    versenyzok_ELEM[index].addEventListener("click", function () {
      console.log(Befutott.indexOf(FUTOK[index].nev) === -1);
      if (Befutott.indexOf(FUTOK[index].nev) === -1) {
        txt = `<tr>
      <td>${FUTOK[index].nev}</td>
      <td>${FUTOK[index].nemzetiseg}</td>
      <td>${FUTOK[index].versenyIdo}</td>
      </tr>`;
        Befutott.push(FUTOK[index].nev);
      }

      console.log(txt);
      feladat3_ELEM.innerHTML += txt;
      txt = "";
      console.log(Befutott.length);
      console.log(FUTOK.length);
      ellenoriz();
    });
  }
}

// 4. feladat
function torolEsemeny() {
  const feladat3_ELEM = document.querySelector("#feladat_3");
  const torles_ELEM = document.querySelector("#options button");
  torles_ELEM.addEventListener("click", function () {
    feladat3_ELEM.innerHTML = "";
  });
}

// 5. feladat
function ellenoriz() {
  if (Befutott.length === FUTOK.length) {
    alert("Verseny véget ért!");
  }
}
