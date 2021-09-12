//VARIABLES

let precioOriginal; 
let precioConDescuento;
let porcentajeDescuento;
let valorDescuento

//FUNCIONES
function calcularValorDescuento(){
    let input = document.getElementById("inputPrize");
    precioOriginal = Number(input.value);
    const resultP =document.getElementById("calcularValorDescuento()");
    input = document.getElementById("inputDiscount");
    porcentajeDescuento = Number(input.value);
    valorDescuento = (porcentajeDescuento * precioOriginal) / 100;
    precioConDescuento = precioOriginal - valorDescuento;
    input = document.getElementById("calculadora-resultado")
    let pResultado = input;
    pResultado.innerHTML = `El precio con descuento es ${precioConDescuento}.`    
};
