var a = 0;
var b = 0;
var c = 0;
var d = 0;
var calcularMedia = 0;
a = parseInt(prompt("Digita un numero a"));
b = parseInt(prompt("Digita un numero b"));
c = parseInt(prompt("Digita un numero c"));
d = parseInt(prompt("Digita un numero d"));
calcularMedia = media(a,b,c,d);

function media(nA, nB, nC, nD){
    const result = ((nA+nB+nC+nD)/4);
    console.log("El resultado de la media es: " + result);
}