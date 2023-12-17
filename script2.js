const pitanja = [
    {
        pitanje: "Koji je komičar magistar elektrotehnike?",
        odgovori: ["Jim Carrey", "Steve Carell", "Rowan Atkinson"],
        indexTocnogOdgovora: 2
    }, 
    {
        pitanje: "Dan D na Pacifiku bio je 15. lipnja 1944. kada su Amerikanci izvršili desant na...?",
        odgovori: ["Okinawu", "Saipan", "Guam"],
        indexTocnogOdgovora: 2
    }
];

let indexTrenutnogPitanja = 0;
let brojTocnih = 0;
let brojKrivih = 0;

function answer(e) {
    const arrayOfAnswerElemnts = document.querySelector("#odgovori").querySelectorAll("button");

    arrayOfAnswerElemnts.forEach(function(btn){
        if(btn.classList.contains("correct")){
            btn.classList.add("tocno");
        } else {
            btn.classList.add("krivo");
        }
    });

    if(e.target.classList.contains("correct")){
        brojTocnih++;
    } else {
        brojKrivih++;
    }
    
    indexTrenutnogPitanja++;
}


function nextQuestion() {
    const pitanjeElement = document.querySelector("#pitanje");
    const pitanjeIOdgovor = pitanja[indexTrenutnogPitanja];

    pitanjeElement.innerHTML = pitanjeIOdgovor.pitanje;

    pitanjeIOdgovor.odgovori.forEach(function(arrayItem, index) {
        const button = document.querySelector("#odg" + (index + 1))
        button.addEventListener("click", answer);
        button.innerHTML = arrayItem;
        button.className = "";

        if(index === pitanjeIOdgovor.indexTocnogOdgovora){
            button.classList.add("correct");
        }
    });
}

nextQuestion();

document.querySelector("#dalje").addEventListener("click", nextQuestion);

