`use strict`

// definisco il array (squadreCalcio)
const squadreCalcio =[
    {
        nome: `Alexis`,
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: `David`,
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: `Nicolas`,
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: `Erick`,
        punti_fatti: 0,
        falli_subiti: 0
    }
];

//definisco due variabili per un numero randomico

let random;
let randomFalli;

// aggiungo un numero randomico a (punti_fatti:) e (falli_subiti)
for (let i = 0; i < squadreCalcio.length; i++) {
random = Math.floor(Math.random()*10+1);
randomFalli = Math.floor(Math.random()*10+1);
squadreCalcio[i].punti_fatti = random;
squadreCalcio[i].falli_subiti = randomFalli;
}
// stampo il array (squadreCalcio) con numeri randomico 
console.log(squadreCalcio);

// definisco un array (squadreCalcio1) con (calcio.nome) e (calcio.falli_subiti)
const squadreCalcio1 = squadreCalcio.map(function (calcio) {
    return {
        nome: calcio.nome,
        falli_subiti: calcio.falli_subiti
    };
})
//stampo il array con (calcio.nome) e (calcio.falli_subiti)
console.log(squadreCalcio1);