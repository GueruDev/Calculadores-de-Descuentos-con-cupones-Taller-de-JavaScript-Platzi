//VARIABLES

let precioOriginal; 
let precioConDescuento;
let porcentajeDescuento;
let valorDescuento
couponsList = [];
let     CouponDiscount = undefined;

//FUNCIONES

function agregar(){
    couponsList.push(couponNew);
    document.getElementById("add").innerHTML += 
    `<tr class="newcoupon-table-tr" id="newCouponstr">
    <td class="newcoupon-tr__td">${couponNew.inputname}</td>
    <td class="newcoupon-tr__td">${couponNew.inputdiscount}</td>
    </tr>`;
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
function comparar(){
    code = document.getElementById("inputCoupon").value;
    let compare = couponsList.find ( item => item.inputname == code);
    if (code == ""){
        console.log("No hay cupón");
        console.log(CouponDiscount);
    }
    else if(code === compare.inputname){
        CouponDiscount = compare.inputdiscount;
        console.log(CouponDiscount);
    };
};
function calcularValorDescuento(){
    comparar();
    precioOriginal = document.getElementById("inputPrize").value;
    porcentajeDescuento = document.getElementById("inputDiscount").value;
    console.log(CouponDiscount);
    pResultado = document.getElementById("calculadora-resultado");
    if(CouponDiscount === undefined){
        valorDescuento = (porcentajeDescuento * precioOriginal) / 100;
        console.log(valorDescuento);
        precioConDescuento = precioOriginal - valorDescuento;
        pResultado.innerHTML = `El precio con descuento es $${precioConDescuento}.`;
    }
    else{
        //console.log(`(${CouponDiscount} * ((${porcentajeDescuento} * ${precioOriginal})/100))/100`);
        valorDescuento = (porcentajeDescuento * precioOriginal)/100;
        //console.log(valorDescuento);
        precioConDescuento = precioOriginal - valorDescuento;
        otherDiscount = (precioConDescuento * CouponDiscount)/100; 
        precioFinal = precioConDescuento - otherDiscount;
        pResultado.innerHTML = `El precio con descuento es $${precioFinal}.`;
    }
};
