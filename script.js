//Pitanja i odgovori
const pitanje1 = "Koji je komičar magistar elektrotehnike?";
const odgovori1 = ["Jim Carrey", "Steve Carell", "Rowan Atkinson"];

const pitanje2 = "Dan D na Pacifiku bio je 15. lipnja 1944. kada su Amerikanci izvršili desant na...";
const odgovori2 = ["Okinawu", "Saipan", "Guam"];

const pitanje3 = "Zbog specifičnog oblika Šri Lanku se naziva i...";
const odgovori3 = ["suzom Indije", "brkom Indije", "naočalima Indije"];

const pitanje4 = "Što nije turcizam?";
const odgovori4 = ["džamija", "džem", "džep"];

const pitanje5 = "Koji je literalni Tom dijete 21. stoljeća?";
const odgovori5 = ["Jones", "Gates", "Sawyer"];

let brojTocnih = 0;
let brojKrivih = 0;


//Placeholderi za pitanja i odgovore u index.html
const main = document.getElementById("main");
let pitanje = document.getElementById("pitanje");
let odg1 = document.getElementById("odg1");
let odg2 = document.getElementById("odg2");
let odg3 = document.getElementById("odg3");
const start = document.getElementById("start");
const dalje = document.getElementById("dalje");

//Start kviza
start.addEventListener("click", prvoPitanje);

//Prvo pitanje
function prvoPitanje() {
    pitanje.innerHTML = pitanje1;
    odg1.innerHTML = odgovori1[0];
    odg2.innerHTML = odgovori1[1];
    odg3.innerHTML = odgovori1[2];
    start.removeEventListener("click", prvoPitanje);

    odg1.addEventListener("click", krivo);
    odg2.addEventListener("click", krivo);
    odg3.addEventListener("click", tocno);
    
    function krivo() {
        odg1.setAttribute("class", "krivo");
        odg2.setAttribute("class", "krivo");
        odg3.setAttribute("class", "tocno");
        odg1.removeEventListener("click", krivo);
        odg2.removeEventListener("click", krivo);
        odg3.removeEventListener("click", tocno);
        dalje.addEventListener("click", drugoPitanje);
    }

    function tocno() {
        odg3.setAttribute("class", "tocno");
        odg1.removeEventListener("click", krivo);
        odg2.removeEventListener("click", krivo);
        odg3.removeEventListener("click", tocno);
        dalje.addEventListener("click", drugoPitanje);
    }   
}

function drugoPitanje() {
    odg1.classList.remove("krivo");
    odg2.classList.remove("krivo");
    odg3.classList.remove("tocno");
    
    pitanje.innerHTML = pitanje2;
    odg1.innerHTML = odgovori2[0];
    odg2.innerHTML = odgovori2[1];
    odg3.innerHTML = odgovori2[2];

    odg1.addEventListener("click", krivo);
    odg2.addEventListener("click", tocno);
    odg3.addEventListener("click", krivo);
    
    function krivo() {
        odg1.setAttribute("class", "krivo");
        odg2.setAttribute("class", "tocno");
        odg3.setAttribute("class", "krivo");
        odg1.removeEventListener("click", krivo);
        odg2.removeEventListener("click", krivo);
        odg3.removeEventListener("click", tocno);
        dalje.addEventListener("click", trecePitanje);
    }

    function tocno() {
        odg2.setAttribute("class", "tocno");
        odg1.removeEventListener("click", krivo);
        odg2.removeEventListener("click", krivo);
        odg3.removeEventListener("click", tocno);
        dalje.addEventListener("click", trecePitanje);
    }   
}

function trecePitanje() {
    odg1.classList.remove("krivo");
    odg2.classList.remove("tocno");
    odg3.classList.remove("krivo");
    
    pitanje.innerHTML = pitanje3;
    odg1.innerHTML = odgovori3[0];
    odg2.innerHTML = odgovori3[1];
    odg3.innerHTML = odgovori3[2];

    odg1.addEventListener("click", tocno);
    odg2.addEventListener("click", krivo);
    odg3.addEventListener("click", krivo);
    
    function krivo() {
        odg1.setAttribute("class", "tocno");
        odg2.setAttribute("class", "krivo");
        odg3.setAttribute("class", "krivo");
        odg1.removeEventListener("click", tocno);
        odg2.removeEventListener("click", krivo);
        odg3.removeEventListener("click", krivo);
        dalje.addEventListener("click", cetvrtoPitanje);
    }

    function tocno() {
        odg1.setAttribute("class", "tocno");
        odg2.removeAttribute("class", "tocno");
        odg3.removeAttribute("class", "krivo");
        odg1.removeEventListener("click", tocno);
        odg2.removeEventListener("click", krivo);
        odg3.removeEventListener("click", krivo);
        dalje.addEventListener("click", cetvrtoPitanje);
    } 
}

function cetvrtoPitanje() {
    odg1.classList.remove("tocno");
    odg2.classList.remove("krivo");
    odg3.classList.remove("krivo");
    
    pitanje.innerHTML = pitanje4;
    odg1.innerHTML = odgovori4[0];
    odg2.innerHTML = odgovori4[1];
    odg3.innerHTML = odgovori4[2];

    odg1.addEventListener("click", krivo);
    odg2.addEventListener("click", tocno);
    odg3.addEventListener("click", krivo);
    
    function krivo() {
        odg1.setAttribute("class", "krivo");
        odg2.setAttribute("class", "tocno");
        odg3.setAttribute("class", "krivo");
        odg1.removeEventListener("click", krivo);
        odg2.removeEventListener("click", tocno);
        odg3.removeEventListener("click", krivo);
        dalje.addEventListener("click", petoPitanje);
    }

    function tocno() {
        odg2.setAttribute("class", "tocno");
        odg1.removeAttribute("class", "tocno");
        odg3.removeAttribute("class", "krivo");
        odg1.removeEventListener("click", krivo);
        odg2.removeEventListener("click", tocno);
        odg3.removeEventListener("click", krivo);
        dalje.addEventListener("click", petoPitanje);
    } 
}

function petoPitanje() {
    odg1.classList.remove("krivo");
    odg2.classList.remove("tocno");
    odg3.classList.remove("krivo");
    
    pitanje.innerHTML = pitanje5;
    odg1.innerHTML = odgovori5[0];
    odg2.innerHTML = odgovori5[1];
    odg3.innerHTML = odgovori5[2];

    odg1.addEventListener("click", krivo);
    odg2.addEventListener("click", tocno);
    odg3.addEventListener("click", krivo);
    
    function krivo() {
        odg1.setAttribute("class", "krivo");
        odg2.setAttribute("class", "tocno");
        odg3.setAttribute("class", "krivo");
        odg1.removeEventListener("click", krivo);
        odg2.removeEventListener("click", tocno);
        odg3.removeEventListener("click", krivo);
        dalje.addEventListener("click", kraj);
    }

    function tocno() {
        odg2.setAttribute("class", "tocno");
        odg1.removeAttribute("class", "tocno");
        odg3.removeAttribute("class", "krivo");
        odg1.removeEventListener("click", krivo);
        odg2.removeEventListener("click", tocno);
        odg3.removeEventListener("click", krivo);
        dalje.addEventListener("click", kraj);
    } 
}

function kraj() {
    odg1.remove();
    odg2.remove();
    odg3.remove();
    start.remove();
    dalje.remove();
    document.querySelector("br").remove();
    document.querySelector("br").remove();

    pitanje.innerHTML = "Vaš rezultat:"

    let tocni = document.createElement("p");
    let odgovori = document.getElementById("odgovori");
    odgovori.appendChild(tocni);
    tocni.innerHTML = "Broj točnih: "

    let krivi = document.createElement("p");
    let odgovori2 = document.getElementById("odgovori");
    odgovori.appendChild(krivi);
    krivi.innerHTML = "Broj krivih: "
}