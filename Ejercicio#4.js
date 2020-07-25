var tipoBox=0;
var tipoCaja=1;

const padding=10;
const width=300;
const border=2;
var calcularCaja=0;

tipo=parseInt(prompt("INGRESA EL TIPO DE CAJA A DIBUJAR-------0=BORDER 1=CONTER"));
calcularCaja= caja(tipo,padding, width, border);

function caja(tipoCaja,p,w,b){
    if(tipoCaja===0){
        console.log('El ancho del contenido es:');

    }else if(tipoCaja===1){
        console.log('El ancho del border-box es de:');
    }
    else{
        console.log('Error');
    }
}