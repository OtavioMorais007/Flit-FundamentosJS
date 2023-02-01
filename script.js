var soma = 2 + 15
var subtracao = -26 - (-9)
var divisao = 80 / 3
var rest = 80 % 3
soma += 5
subtracao -= 5

// se caminho 5km&&corro 2km, passo o dia bem
// se levanto cedo || antes das 8h, saio tranquilo
// !se termino o trabalho || !tenho compromisso, saio tarde


// 1.3

var caminhada = "5km"
var correr = "2km"

if (caminhada === "5km" && correr === "2km") {
    console.log("Passo o dia bem")
}

var levanto = "cedo"

if (levanto === "cedo" || levanto === "antes das 8h") {
    console.log("Saio tranquilo")
}

var trabalho = true
var compromisso = true

if (!trabalho == false || !compromisso == false) {
    console.log("Saio tarde")
}

var numero = 7
var contador = 0
for (var index = 0; index <= numero; index++) {
    switch (numero % index) {
        case 0:
            contador++
            break;
        default:
            break;
    }
}

var hora = 3
var minutos = 0

hora > 0 ? minutos = hora * 60 : minutos = 60;
console.log(minutos)

// 1.4

var numeros = [12, 6, 9, 42, 11, 102, 44, 15]

// FOR
var soma = 0
for (var i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}
console.log("A soma é " + soma)

// WHILE
soma = 0
var index = 0
while (index < numeros.length) {
    soma += numeros[index]
    index++
}
console.log("A soma é " + soma)

// DO WHILE
soma = 0
index = 0
do {
    soma += numeros[index]
    index++
} while (index < numeros.length)
console.log("A soma é " + soma)

// 1.4.1

for(var i = 2; i < 100; i++){
    console.log(i)
    if(i % 1 === 0 && i % i === 0){
        console.log("O primeiro número primo é: " + i)
        break;
    }
}
console.log("----------------------------")

for (let i = 0; i < 100; i++) {
    if (i > 39 && i < 51) {
        continue;
    }
    console.log(i)
}