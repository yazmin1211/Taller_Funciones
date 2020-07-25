var precio = 0;
var calculo = 0;

precio = parseInt(prompt('Ingrese el precio: '));
calculo = calculoIVA(precio);

function calculoIVA(precio){
    var iva = 0;

    iva = precio * 0.21;


    console.log("Precio sin iva: "+precio);
    console.log("IVA: "+iva);
    console.log("Total: "+(precio+iva));
}