const tablazat = document.querySelector("#tabla");
const hegyek = ["2-2", "4-9", "6-4", "9-10", "10-6"];
tablazatKiiras();
function tablazatKiiras() {
  for (let i = 1; i <= 11; i++) {
    const tr = document.createElement("tr");
    for (let j = 1; j <= 11; j++) {
      const td = document.createElement("td");
      const img = document.createElement("img");
      img.id = i + "-" + j;
      if (hegyek.includes(img.id)) {
        img.src = "kepek/elem/alap_hegy.png";
        img.alt = "alap_hegy";
      } else {
        img.src = "kepek/elem/alap.png";
        img.alt = "alap";
      }
      img.addEventListener("mouseover", negyzetRe);
      img.addEventListener("mouseout", negyzetRol);
      img.addEventListener("click", lerak);

      td.appendChild(img);
      tr.appendChild(td);
    }
    tablazat.appendChild(tr);
  }
}

const missions = [
  {
      title: "Az erdő széle",
      description:
        "A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz.",
    },
    {
      title: "Álmos-völgy",
      description:
        "Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz.",
    },
    {
      title: "Krumpliöntözés",
      description:
        "A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz.",
    },
    {
      title: "Határvidék",
      description: "Minden teli sorért vagy oszlopért 6-6 pontot kapsz.",
    },
  {
    title: "Fasor",
    description:
      "A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért.",
  },
  {
    title: "Gazdag város",
    description:
      "A legalább három különböző tereptípussal szomszédos falurégióidért három-három pontot kapsz.",
  },
  {
    title: "Öntözőcsatorna",
    description:
      "Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy pontot kapsz. Mindkét tereptípusból legalább egy-egy mezőnek lennie kell az oszlopban ahhoz, hogy pontot kaphass érte.",
  },
  {
    title: "Mágusok völgye",
    description:
      "A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz.",
  },
  {
    title: "Üres telek",
    description: "A városmezőiddel szomszédos üres mezőkért 2-2 pontot kapsz.",
  },
  {
    title: "Sorház",
    description:
      "A leghosszabb, vízszintesen megszakítás nélkül egybefüggő falumezők mindegyikéért kettő-kettő pontot kapsz.",
  },
  {
    title: "Páratlan silók",
    description:
      "Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz.",
  },
  {
    title: "Gazdag vidék",
    description:
      "Minden legalább öt különböző tereptípust tartalmazó sorért négy-négy pontot kapsz.",
  },
];
const kuldetesek = document.querySelector("#kuldetesek");
let kuldetesSzamok = [];
kuldetesKiiras(missions);
function kuldetesKiiras(missions) {
  let l = missions.length;

  while (kuldetesSzamok.length != l) {
    let rand = Math.floor(Math.random() * l);
    if (!kuldetesSzamok.includes(rand + 1)) {
      kuldetesSzamok.push(rand + 1);
    }
  }

  for (let index = 0; index < 4; index++) {
    const div = document.createElement("div");
    div.className = "kuldetesLeiras";

    const imgDiv = document.createElement("div");
    imgDiv.className = "img-container";

    const img = document.createElement("img");
    img.src = "kepek/kuldetesek/" + kuldetesSzamok[index] + "_kuldetes.png";
    img.alt = kuldetesSzamok[index];
    imgDiv.appendChild(img);
    div.appendChild(imgDiv);

    const p1 = document.createElement("p");
    p1.className = "pontok";
    p1.innerHTML = "(0) pont";
    const p2 = document.createElement("p");
    p2.className = "betu";
    p2.innerHTML = String.fromCharCode(65 + index);

    div.appendChild(p1);
    div.appendChild(p2);

    kuldetesek.appendChild(div);
  }
}
let betuk = document.getElementsByClassName("betu");
betuk[0].style.setProperty("color", "red");
betuk[1].style.setProperty("color", "red");
let evszak = document.getElementById("evszak");
evszak.innerHTML = "Tavasz (AB)";

const aktAlakzat = document.querySelector("#aktAlakzat");
const elements = [
  {
    time: 2,
    type: "water",
    shape: [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "town",
    shape: [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "forest",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "farm",
    shape: [
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "forest",
    shape: [
      [1, 1, 1],
      [0, 0, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "town",
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "farm",
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "town",
    shape: [
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "town",
    shape: [
      [1, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "farm",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 1,
    type: "farm",
    shape: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "water",
    shape: [
      [1, 1, 1],
      [1, 0, 0],
      [1, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "water",
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [1, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "forest",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 1],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "forest",
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
  {
    time: 2,
    type: "water",
    shape: [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ],
    rotation: 0,
    mirrored: false,
  },
];

let kevertSzamlalo = 0;
let kevert = [];
let element;
randomAlakzatok();
function randomAlakzatok() {
  kevert = [];
  kevertSzamlalo = 0;
  while (kevert.length != 7) {
    let rand = Math.floor(Math.random() * elements.length);
    if (!kevert.includes(elements[rand])) {
      kevert.push(elements[rand]);
    }
  }
  element = kevert[kevertSzamlalo];
  alakzatKiiras(element);
}

function alakzatKiiras(element) {
  aktAlakzat.innerHTML = "";

  let row = document.createElement("tr");
  for (let index = 0; index < 3; index++) {
    let cell = document.createElement("td");
    if (index == 2) {
      cell.innerHTML = "Idő: " + element.time;
    }
    row.appendChild(cell);
  }

  aktAlakzat.appendChild(row);
  let matrix = element.shape;
  if (
    matrix[1][1] === 0 &&
    matrix[0][1] === 1 &&
    matrix[2].every((val) => val === 0)
  ) {
    matrix[2] = matrix[1];
    matrix[1] = matrix[0];
    matrix[0] = [0, 0, 0];
  }

  for (let i = 0; i <= 2; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j <= 2; j++) {
      const td = document.createElement("td");

      const img = document.createElement("img");
      if (matrix[i][j] == 1) {
        img.src = "kepek/elem/" + element.type + ".png";
      } else {
        img.src = "kepek/elem/alap.png";
      }

      td.appendChild(img);
      tr.appendChild(td);
    }
    aktAlakzat.appendChild(tr);
  }
}

const forgat = document.querySelector("#forgat");
const tukroz = document.querySelector("#tukroz");
forgat.addEventListener("click", () => {
  let N = 3;
  let m = element.shape;
  for (let i = 0; i < N / 2; i++) {
    for (let j = i; j < N - i - 1; j++) {
      let temp = m[i][j];
      m[i][j] = m[N - 1 - j][i];
      m[N - 1 - j][i] = m[N - 1 - i][N - 1 - j];
      m[N - 1 - i][N - 1 - j] = m[j][N - 1 - i];
      m[j][N - 1 - i] = temp;
    }
  }
  element.rotation += 90;
  if (element.rotation == 360) {
    element.rotation = 0;
  }

  //console.log(m);
  alakzatKiiras(element);
});

tukroz.addEventListener("click", () => {
  for (let i = 0; i < element.shape.length; i++) {
    element.shape[i].reverse();
  }
  element.mirrored = element.mirrored == true ? false : true;
  alakzatKiiras(element);
});

let indexek;
let rossz = false;
function negyzetRe(e) {
  //console.log(e.target.id);
  let id = e.target.id;
  indexek = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  rossz = false;
  let [sor, oszlop] = id.split("-").slice(0).map(Number);
  let sorI = -1;
  let sorJ = -1;
  for (let i = sor - 1; i <= sor + 1; i++) {
    sorI++;
    sorJ = -1;
    for (let j = oszlop - 1; j <= oszlop + 1; j++) {
      sorJ++;
      const id = `${i}-${j}`;
      if (document.getElementById(id)) {
        indexek[sorI][sorJ] = id;
      } else {
        indexek[sorI][sorJ] = "0";
      }
    }
  }
  //console.log(indexek);
  //console.log(element.shape);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (indexek[i][j] === "0" && element.shape[i][j] == 1) {
        rossz = true;
      } else {
        let a = document.getElementById(indexek[i][j]);
        if (a && element.shape[i][j] == 1) {
          if (a.alt == "alap") {
            a.src = "kepek/elem/alap_jo.png";
          } else {
            a.src = "kepek/elem/alap_rossz.png";
            rossz = true;
          }
        }
      }
    }
  }
  if (rossz) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (element.shape[i][j] == 1) {
          let a = document.getElementById(indexek[i][j]);
          if (a) {
            if (a.alt == "alap") {
              a.src = "kepek/elem/alap_rossz.png";
            }
          }
        }
      }
    }
  }
}
function negyzetRol() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (element.shape[i][j] == 1) {
        let a = document.getElementById(indexek[i][j]);
        if (a) {
          a.src = "kepek/elem/" + a.alt + ".png";
        }
      }
    }
  }
  //e.target.src = "kepek/elem/"+ e.target.alt +".png";*/
}
function lerak(e) {
  if (!rossz) {
    e.target.removeEventListener("click", lerak);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (element.shape[i][j] == 1) {
          let a = document.getElementById(indexek[i][j]);
          if (a) {
            if (a.alt == "alap") {
              a.src = "kepek/elem/" + element.type + ".png";
              a.alt = element.type;
            }
          }
        }
      }
    }

    lepes();
    kevertSzamlalo++;
    element = kevert[kevertSzamlalo];
    alakzatKiiras(element);
  }
}

let evszakok = ["tavasz", "nyar", "osz", "tel"];
let jelenEvszak = evszakok[0];
let evszakSz = 0;
let idoKeret = document.querySelector("#idoKeret");
let ido = 7;

let kuldetesPontok = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let pontok = document.getElementsByClassName("pontok");

let kuld = document.getElementsByClassName("img-container");
let kSz1 = kuld[0].getElementsByTagName("img")[0].alt;
let kSz2 = kuld[1].getElementsByTagName("img")[0].alt;
let kSz3 = kuld[2].getElementsByTagName("img")[0].alt;
let kSz4 = kuld[3].getElementsByTagName("img")[0].alt;
function lepes() {
  ido -= element.time;
  if (ido == 0 || ido == -1) {
    korbevettHegy();
    switch (jelenEvszak) {
      case "tavasz":
        kuldetesKereses(kSz1);
        kuldetesKereses(kSz2);
        pontok[0].innerHTML =
          "(" + kuldetesPontok[parseInt(kSz1) - 1] + ") pont";
        pontok[1].innerHTML =
          "(" + kuldetesPontok[parseInt(kSz2) - 1] + ") pont";

        ido = 7;
        evszakSz++;
        jelenEvszak = evszakok[evszakSz];
        betuk[0].style.setProperty("color", "white");
        betuk[2].style.setProperty("color", "red");
        evszak.innerHTML = "Nyár (BC)";
        randomAlakzatok();
        break;
      case "nyar":
        kuldetesKereses(kSz2);
        kuldetesKereses(kSz3);
        pontok[1].innerHTML =
          "(" + kuldetesPontok[parseInt(kSz2) - 1] + ") pont";
        pontok[2].innerHTML =
          "(" + kuldetesPontok[parseInt(kSz3) - 1] + ") pont";

        ido = 7;
        evszakSz++;
        jelenEvszak = evszakok[evszakSz];
        betuk[1].style.setProperty("color", "white");
        betuk[3].style.setProperty("color", "red");
        evszak.innerHTML = "Ősz (CD)";
        randomAlakzatok();

        break;
      case "osz":
        kuldetesKereses(kSz3);
        kuldetesKereses(kSz4);
        pontok[2].innerHTML =
          "(" + kuldetesPontok[parseInt(kSz3) - 1] + ") pont";
        pontok[3].innerHTML =
          "(" + kuldetesPontok[parseInt(kSz4) - 1] + ") pont";

        ido = 7;
        evszakSz++;
        jelenEvszak = evszakok[evszakSz];
        betuk[2].style.setProperty("color", "white");
        betuk[0].style.setProperty("color", "red");
        evszak.innerHTML = "Tél (DA)";
        randomAlakzatok();
        break;
      case "tel":
        kuldetesKereses(kSz4);
        kuldetesKereses(kSz1);
        pontok[3].innerHTML =
          "(" + kuldetesPontok[parseInt(kSz4) - 1] + ") pont";
        pontok[0].innerHTML =
          "(" + kuldetesPontok[parseInt(kSz1) - 1] + ") pont";

        ido = 0;
        betuk[3].style.setProperty("color", "white");
        betuk[0].style.setProperty("color", "white");
        evszak.innerHTML = "Vége";

        const element = document.querySelectorAll("#tabla td img");
        element.forEach(function (elem) {
          elem.removeEventListener("mouseover", negyzetRe);
          elem.removeEventListener("mouseout", negyzetRol);
          elem.removeEventListener("click", lerak);
        });

        let akt = document.getElementById("aktForma");
        akt.innerHTML = "";
        break;
    }
  }

  idoKeret.innerHTML = ido + "/7";
}

function kuldetesKereses(sorSzam) {
  switch (sorSzam) {
    case "1":
      kuldetes1();
      break;
    case "2":
      kuldetes2();
      break;
    case "3":
      kuldetes3();
      break;
    case "4":
      kuldetes4();
      break;
    case "5":
      kuldetes5();
      break;
    case "6":
      kuldetes6();
      break;
    case "7":
      kuldetes7();
      break;
    case "8":
      kuldetes8();
      break;
    case "9":
      kuldetes9();
      break;
    case "10":
      kuldetes10();
      break;
    case "11":
      kuldetes11();
      break;
    case "12":
      kuldetes12();
      break;
  }
}

let evszakSzovegP = ["tavaszP", "nyarP", "oszP", "telP", "osszPont"];
let evszakPontok = [0, 0, 0, 0, 0];

function korbevettHegy() {
  for (let i = 0; i < 11; i++) {
    let row = tablazat.rows[i];
    for (let j = 0; (col = row.cells[j]); j++) {
      let sz = col.querySelector("img").getAttribute("alt");

      let id = col.querySelector("img").getAttribute("id");
      let [sor, oszlop] = id.split("-").slice(0).map(Number);

      if (sz == "alap_hegy") {
        let felette = document.getElementById(sor - 1 + "-" + oszlop);
        let alatta = document.getElementById(sor + 1 + "-" + oszlop);
        let balra = document.getElementById(sor + "-" + (oszlop - 1));
        let jobbra = document.getElementById(sor + "-" + (oszlop + 1));

        if (
          felette.alt != "alap" &&
          alatta.alt != "alap" &&
          balra.alt != "alap" &&
          jobbra.alt != "alap"
        ) {
          evszakPontok[4] += 1;
          evszakPontok[evszakSz] += 1;
          //let osszes = document.getElementById(evszakSzovegP[4]);
          //osszes.innerHTML = "Összesen: " + evszakPontok[4] + " pont";
        }
      }
    }
  }
}

function kuldetes1() {
  //Az erdő széle: A térképed szélével szomszédos erdőmezőidért egy-egy pontot kapsz.
  let db = 0;
  for (let i = 0; i < 11; i++) {
    let row = tablazat.rows[i];
    for (let j = 0; (col = row.cells[j]); j++) {
      let sz = col.querySelector("img").getAttribute("alt");
      if (sz == "forest") {
        db++;
      }
    }
    if (i == 0) {
      i = 9;
    }
  }

  for (let i = 1; i < 10; i++) {
    let row = tablazat.rows[i];
    for (let j = 0; (col = row.cells[j]); j++) {
      let sz = col.querySelector("img").getAttribute("alt");
      if (sz == "forest") {
        db++;
      }
      if (j == 0) {
        j = 9;
      }
    }
  }

  evszakPontok[evszakSz] += db;
  evszakPontok[4] += db;

  let evszakPont = document.getElementById(evszakSzovegP[evszakSz]);
  let osszes = document.getElementById(evszakSzovegP[4]);
  evszakPont.innerHTML = evszakPontok[evszakSz] + " pont";
  osszes.innerHTML = "Összesen: " + evszakPontok[4] + " pont";

  kuldetesPontok[0] += db;
}

function kuldetes2() {
  //Álmos-völgy: Minden olyan sorért, amelyben három erdőmező van, négy-négy pontot kapsz.
  let db = 0;
  for (let i = 0; i < 11; i++) {
    let row = tablazat.rows[i];
    for (let j = 0; (col = row.cells[j]); j++) {
      let sz = col.querySelector("img").getAttribute("alt");
      if (sz == "forest") {
        db++;
      }
    }

    if (db == 3) {
      evszakPontok[evszakSz] += 4;
      evszakPontok[4] += 4;
      kuldetesPontok[1] += 4;
    }
    db = 0;
  }

  let evszakPont = document.getElementById(evszakSzovegP[evszakSz]);
  let osszes = document.getElementById(evszakSzovegP[4]);
  evszakPont.innerHTML = evszakPontok[evszakSz] + " pont";
  osszes.innerHTML = "Összesen: " + evszakPontok[4] + " pont";
}

function kuldetes3() {
  //Krumpliöntözés: A farmmezőiddel szomszédos vízmezőidért két-két pontot kapsz.
  for (let i = 0; i < 11; i++) {
    let row = tablazat.rows[i];
    for (let j = 0; (col = row.cells[j]); j++) {
      let sz = col.querySelector("img").getAttribute("alt");

      let id = col.querySelector("img").getAttribute("id");
      let [sor, oszlop] = id.split("-").slice(0).map(Number);

      if (sz == "farm") {
        if (kuldetes3Seged(sor - 1, oszlop)) {
          evszakPontok[evszakSz] += 2;
          evszakPontok[4] += 2;
          kuldetesPontok[2] += 2;
        }
        if (kuldetes3Seged(sor + 1, oszlop)) {
          evszakPontok[evszakSz] += 2;
          evszakPontok[4] += 2;
          kuldetesPontok[2] += 2;
        }
        if (kuldetes3Seged(sor, oszlop - 1)) {
          evszakPontok[evszakSz] += 2;
          evszakPontok[4] += 2;
          kuldetesPontok[2] += 2;
        }
        if (kuldetes3Seged(sor, oszlop + 1)) {
          evszakPontok[evszakSz] += 2;
          evszakPontok[4] += 2;
          kuldetesPontok[2] += 2;
        }
      }
    }
  }
  let evszakPont = document.getElementById(evszakSzovegP[evszakSz]);
  let osszes = document.getElementById(evszakSzovegP[4]);
  evszakPont.innerHTML = evszakPontok[evszakSz] + " pont";
  osszes.innerHTML = "Összesen: " + evszakPontok[4] + " pont";
}

function kuldetes3Seged(sor, oszlop) {
  let oldal = document.getElementById(sor + "-" + oszlop);
  if (oldal) {
    if (oldal.alt == "water") {
      return true;
    }
  }
}

function kuldetes4() {
  //Határvidék: Minden teli sorért vagy oszlopért 6-6 pontot kapsz.
  let db = 0;

  for (let i = 0; i < 11; i++) {
    let row = tablazat.rows[i];
    for (let j = 0; (col = row.cells[j]); j++) {
      let sz = col.querySelector("img").getAttribute("alt");
      if (sz != "alap") {
        db++;
      }
    }

    if (db == 11) {
      evszakPontok[evszakSz] += 6;
      evszakPontok[4] += 6;
      kuldetesPontok[3] += 6;
    }
    db = 0;
  }

  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      let row = tablazat.rows[j];
      let col = row.cells[i];
      let sz = col.querySelector("img").getAttribute("alt");
      if (sz != "alap") {
        db++;
      }
    }
    if (db == 11) {
      evszakPontok[evszakSz] += 6;
      evszakPontok[4] += 6;
      kuldetesPontok[3] += 6;
    }
    db = 0;
  }
  //console.log(db);
  let evszakPont = document.getElementById(evszakSzovegP[evszakSz]);
  let osszes = document.getElementById(evszakSzovegP[4]);
  evszakPont.innerHTML = evszakPontok[evszakSz] + " pont";
  osszes.innerHTML = "Összesen: " + evszakPontok[4] + " pont";
}

function kuldetes5() {
  //Fasor: A leghosszabb, függőlegesen megszakítás nélkül egybefüggő erdőmezők mindegyikéért kettő-kettő pontot kapsz. Két azonos hosszúságú esetén csak az egyikért.
  let maxPont = 0;
  for (let i = 0; i < 11; i++) {
    let jelenlegiPont = 0;
    let jelenlegiHossz = 0;
    for (let j = 0; j < 11; j++) {
      let row = tablazat.rows[j];
      let col = row.cells[i];
      let sz = col.querySelector("img").getAttribute("alt");
      if (sz == "forest") {
        jelenlegiHossz++;
      } else {
        jelenlegiPont += jelenlegiHossz * 2;
        if (maxPont < jelenlegiPont) {
          maxPont = jelenlegiPont;
        }
        jelenlegiHossz = 0;
        jelenlegiPont = 0;
      }
    }
  }
  kuldetesPontok[4] += maxPont;
  evszakPontok[evszakSz] += maxPont;
  evszakPontok[4] += maxPont;

  let evszakPont = document.getElementById(evszakSzovegP[evszakSz]);
  let osszes = document.getElementById(evszakSzovegP[4]);
  evszakPont.innerHTML = evszakPontok[evszakSz] + " pont";
  osszes.innerHTML = "Összesen: " + evszakPontok[4] + " pont";
}

function kuldetes6() {
  //Gazdag város: A legalább három különböző tereptípussal szomszédos falumezőidért három-három pontot kapsz.
  let kulonbozok = [];
  let pont = 0;
  for (let i = 0; i < 11; i++) {
    let row = tablazat.rows[i];
    for (let j = 0; (col = row.cells[j]); j++) {
      let sz = col.querySelector("img").getAttribute("alt");

      let id = col.querySelector("img").getAttribute("id");
      let [sor, oszlop] = id.split("-").slice(0).map(Number);

      if (sz == "town") {
        let felette = document.getElementById(sor - 1 + "-" + oszlop);
        let alatta = document.getElementById(sor + 1 + "-" + oszlop);
        let balra = document.getElementById(sor + "-" + (oszlop - 1));
        let jobbra = document.getElementById(sor + "-" + (oszlop + 1));

        let helyek = [felette, alatta, balra, jobbra];
        helyek.forEach((elem) => {
          if (elem) {
            if (elem.alt != "alap" && !kulonbozok.includes(elem.alt)) {
              kulonbozok.push(elem.alt);
            }
          }
        });
        if (kulonbozok.length >= 3) {
          pont += 3;
        }
      }
      kulonbozok = [];
    }
  }

  kuldetesPontok[5] += pont;
  evszakPontok[evszakSz] += pont;
  evszakPontok[4] += pont;

  let evszakPont = document.getElementById(evszakSzovegP[evszakSz]);
  let osszes = document.getElementById(evszakSzovegP[4]);
  evszakPont.innerHTML = evszakPontok[evszakSz] + " pont";
  osszes.innerHTML = "Összesen: " + evszakPontok[4] + " pont";
}

function kuldetes7() {
  //Öntözőcsatorna: Minden olyan oszlopodért, amelyben a farm illetve a vízmezők száma megegyezik, négy-négy
  let vizPont = 0;
  let farmPont = 0;
  let osszPont = 0;
  for (let i = 0; i < 11; i++) {
    let jelenlegiPont = 0;
    let jelenlegiHossz = 0;
    for (let j = 0; j < 11; j++) {
      let row = tablazat.rows[j];
      let col = row.cells[i];
      let sz = col.querySelector("img").getAttribute("alt");
      if (sz == "farm") {
        farmPont++;
      }

      if (sz == "water") {
        vizPont++;
      }
    }

    if (vizPont != 0 && vizPont == farmPont) {
      osszPont += 4;
    }
    vizPont = 0;
    farmPont = 0;
  }
  kuldetesPontok[6] += osszPont;
  evszakPontok[evszakSz] += osszPont;
  evszakPontok[4] += osszPont;

  let evszakPont = document.getElementById(evszakSzovegP[evszakSz]);
  let osszes = document.getElementById(evszakSzovegP[4]);
  evszakPont.innerHTML = evszakPontok[evszakSz] + " pont";
  osszes.innerHTML = "Összesen: " + evszakPontok[4] + " pont";
}

function kuldetes8() {
  //Mágusok völgye: A hegymezőiddel szomszédos vízmezőidért három-három pontot kapsz.
  for (let i = 0; i < 11; i++) {
    let row = tablazat.rows[i];
    for (let j = 0; (col = row.cells[j]); j++) {
      let sz = col.querySelector("img").getAttribute("alt");

      let id = col.querySelector("img").getAttribute("id");
      let [sor, oszlop] = id.split("-").slice(0).map(Number);

      if (sz == "alap_hegy") {
        let felette = document.getElementById(sor - 1 + "-" + oszlop);
        let alatta = document.getElementById(sor + 1 + "-" + oszlop);
        let balra = document.getElementById(sor + "-" + (oszlop - 1));
        let jobbra = document.getElementById(sor + "-" + (oszlop + 1));

        let helyek = [felette, alatta, balra, jobbra];
        helyek.forEach((elem) => {
          if (elem) {
            if (elem.alt == "water") {
              kuldetesPontok[7] += 3;
              evszakPontok[evszakSz] += 3;
              evszakPontok[4] += 3;
            }
          }
        });
      }
    }
  }

  let evszakPont = document.getElementById(evszakSzovegP[evszakSz]);
  let osszes = document.getElementById(evszakSzovegP[4]);
  evszakPont.innerHTML = evszakPontok[evszakSz] + " pont";
  osszes.innerHTML = "Összesen: " + evszakPontok[4] + " pont";
}

function kuldetes9() {
  //Üres telek: A falumezőiddel szomszédos üres mezőkért 2-2 pontot kapsz.
  for (let i = 0; i < 11; i++) {
    let row = tablazat.rows[i];
    for (let j = 0; (col = row.cells[j]); j++) {
      let sz = col.querySelector("img").getAttribute("alt");

      let id = col.querySelector("img").getAttribute("id");
      let [sor, oszlop] = id.split("-").slice(0).map(Number);

      if (sz == "town") {
        let felette = document.getElementById(sor - 1 + "-" + oszlop);
        let alatta = document.getElementById(sor + 1 + "-" + oszlop);
        let balra = document.getElementById(sor + "-" + (oszlop - 1));
        let jobbra = document.getElementById(sor + "-" + (oszlop + 1));

        let helyek = [felette, alatta, balra, jobbra];
        helyek.forEach((elem) => {
          if (elem) {
            if (elem.alt == "alap") {
              kuldetesPontok[8] += 2;
              evszakPontok[evszakSz] += 2;
              evszakPontok[4] += 2;
            }
          }
        });
      }
    }
  }

  let evszakPont = document.getElementById(evszakSzovegP[evszakSz]);
  let osszes = document.getElementById(evszakSzovegP[4]);
  evszakPont.innerHTML = evszakPontok[evszakSz] + " pont";
  osszes.innerHTML = "Összesen: " + evszakPontok[4] + " pont";
}

function kuldetes10() {
  //Sorház: A leghosszabb, vízszintesen megszakítás nélkül egybefüggő falumezők mindegyikéért kettő-kettő pontot
  let maxPont = 0;
  let sorPontok = 0;
  for (let i = 0; i < 11; i++) {
    let jelenlegiPont = 0;
    let jelenlegiHossz = 0;
    let maxPont = 0;
    let row = tablazat.rows[i];
    for (let j = 0; (col = row.cells[j]); j++) {
      let sz = col.querySelector("img").getAttribute("alt");
      if (sz == "town") {
        jelenlegiHossz++;
      } else {
        if (jelenlegiHossz > 1) {
          jelenlegiPont += jelenlegiHossz * 2;
          if (maxPont < jelenlegiPont) {
            maxPont = jelenlegiPont;
          }
        }
        jelenlegiHossz = 0;
        jelenlegiPont = 0;
      }
    }

    sorPontok += maxPont;
  }

  kuldetesPontok[9] += sorPontok;
  evszakPontok[evszakSz] += sorPontok;
  evszakPontok[4] += sorPontok;

  let evszakPont = document.getElementById(evszakSzovegP[evszakSz]);
  let osszes = document.getElementById(evszakSzovegP[4]);
  evszakPont.innerHTML = evszakPontok[evszakSz] + " pont";
  osszes.innerHTML = "Összesen: " + evszakPontok[4] + " pont";
}

function kuldetes11() {
  //Páratlan silók: Minden páratlan sorszámú teli oszlopodért 10-10 pontot kapsz.
  let db = 0;

  for (let i = 0; i < 11; i += 2) {
    for (let j = 0; j < 11; j++) {
      let row = tablazat.rows[j];
      let col = row.cells[i];
      let sz = col.querySelector("img").getAttribute("alt");
      if (sz != "alap") {
        db++;
      }
    }
    if (db == 11) {
      evszakPontok[evszakSz] += 10;
      evszakPontok[4] += 10;
      kuldetesPontok[10] += 10;
    }
    db = 0;
  }
  let evszakPont = document.getElementById(evszakSzovegP[evszakSz]);
  let osszes = document.getElementById(evszakSzovegP[4]);
  evszakPont.innerHTML = evszakPontok[evszakSz] + " pont";
  osszes.innerHTML = "Összesen: " + evszakPontok[4] + " pont";
}

function kuldetes12() {
  //Gazdag vidék: Minden legalább öt különböző tereptípust tartalmazó sorért négy-négy pontot kapsz.
  let kulonbozok = [];
  let pont = 0;

  for (let i = 0; i < 11; i++) {
    let row = tablazat.rows[i];
    for (let j = 0; (col = row.cells[j]); j++) {
      let sz = col.querySelector("img").getAttribute("alt");
      if (!kulonbozok.includes(sz)) {
        kulonbozok.push(sz);
      }
    }
    if (kulonbozok.length >= 5) {
      pont += 4;
    }
    kulonbozok = [];
  }
  kuldetesPontok[11] += pont;
  evszakPontok[evszakSz] += pont;
  evszakPontok[4] += pont;

  let evszakPont = document.getElementById(evszakSzovegP[evszakSz]);
  let osszes = document.getElementById(evszakSzovegP[4]);
  evszakPont.innerHTML = evszakPontok[evszakSz] + " pont";
  osszes.innerHTML = "Összesen: " + evszakPontok[4] + " pont";
}
