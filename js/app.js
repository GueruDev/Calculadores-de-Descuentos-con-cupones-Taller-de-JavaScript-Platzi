//VARIABLES

let precioOriginal; 
let precioConDescuento;
let porcentajeDescuento;
let valorDescuento

//FUNCIONES

function calcularValorDescuento(){
    precioOriginal = document.getElementById("inputPrize").value;
    porcentajeDescuento = document.getElementById("inputDiscount").value;
    valorDescuento = (porcentajeDescuento * precioOriginal) / 100;
    precioConDescuento = precioOriginal - valorDescuento;
    pResultado = document.getElementById("calculadora-resultado");
    pResultado.innerHTML = `El precio con descuento es $${precioConDescuento}.`;
    comparar();
};

function Capturar(){
    function Coupon(inputname,inputdiscount){
        this.inputname = inputname ;  
        this.inputdiscount = inputdiscount ;
    };
    
    codeCoupon = document.getElementById("addCouponName").value;
    numberDiscound = document.getElementById("addCouponDiscount").value;
    
    couponNew = new Coupon(codeCoupon,numberDiscound);
    agregar();
}
couponsList = [];
function agregar(){
    couponsList.push(couponNew);
    document.getElementById("add").innerHTML += `<p class="newcoupon__p">Código: ${couponNew.inputname} Descuento: ${couponNew.inputdiscount}</p>`;
};
function comparar(){
    CouponDiscount = undefined;
    code = document.getElementById("inputCoupon").value;
    let compare = couponsList.find ( item => item.inputname == code);
    if(code == ""){
        console.log("No hay cupón")
    };
    else if (code === compare.inputname){
        CouponDiscount = compare.inputdiscount;
    };
};
