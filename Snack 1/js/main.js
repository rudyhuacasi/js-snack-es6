`use strict`
// definisco un array (biciCorsa)
const biciCorsa = [
    {
        nome: `bici1`,
        peso: 20
    },
    {
        nome: `bici2`,
        peso: 30
    },
    {
        nome: `bici3`,
        peso: 15
    },
    {
        nome: `bici4`,
        peso: 19
    },
    {
        nome: `bici5`,
        peso: 10
    }
];

// Trova la bici con il peso minore
let biciLeggera = biciCorsa[0];
for (let i = 1; i < biciCorsa.length; i++) {
    if (biciCorsa[i].peso < biciLeggera.peso) {
        biciLeggera = biciCorsa[i];
    }
}


// Utilizza un template literal per stampare a schermo i dettagli della bici con il peso minore
const body = document.querySelector(`body`)
const h3 = document.createElement(`h3`);

body.append(h3);
h3.innerHTML =`
la ${biciLeggera.nome} con peso minore ${biciLeggera.peso} kg.
`



