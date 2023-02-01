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

if(levanto === "cedo" || levanto === "antes das 8h") {
    console.log("Saio tranquilo")
}

var trabalho = true
var compromisso = true

if(!trabalho == false || !compromisso == false) {
    console.log("Saio tarde")
}

var numero = 7
var contador = 0
for (var index = 0; index <= numero; index++) {
     switch(numero % index) {
        case 0:
            contador++
            break;
        default:
            break;
     }
}

var hora = 3
var minutos = 0

hora > 0 ? minutos = hora*60 : minutos = 60;
console.log(minutos)