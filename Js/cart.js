
var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var discountCode = document.getElementById('discount_code1');
// const decreaseNumber = (incdec, itemprice) => {
// var itemval = document.getElementById(incdec);
// var itemprice = document.getElementById(itemprice);
// console.log( itemprice.innerHTML);

// if(itemval.value <= 0){
//     itemval.value = 0;
//     alert('Negative quantity not allowed');
//     } else {
//     itemval.value = parseInt(itemval.value) - 1;
//     itemval.style.background = '#fff';
//     itemval.style.color = '#000';
//     itemprice.innerHTML  = parseInt(itemprice.innerHTML) - 15;
//     product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML) - 15;
//     total_cart_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
//     }
// }

const decreaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);

    if (itemval.value <= 1) {
        alert('Minimum quantity reached. To remove the item, click the "Remove" button.');
    } else {
        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.background = '#fff';
        itemval.style.color = '#000';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 15;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}

const increaseNumber = (incdec, itemprice) => {
var itemval = document.getElementById(incdec);
var itemprice = document.getElementById(itemprice);
// console.log(itemval.value);
if(itemval.value >= 5){
    itemval.value = 5;
    alert('max 5 allowed');
    itemval.style.background = 'red';
    itemval.style.color = '#fff';
    } else {
    itemval.value = parseInt(itemval.value) + 1;
    itemprice.innerHTML  = parseInt(itemprice.innerHTML ) + 15;
    product_total_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + 15;
    total_cart_amt.innerHTML  = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
}
}
const  discount_code = () => {
    let totalamtcurr = parseInt(total_cart_amt.innerHTML);
    let error_trw = document.getElementById('error_trw');
        if (discountCode.value === 'v300') {
            let newtotalamt = totalamtcurr - 15;
            total_cart_amt.innerHTML = newtotalamt;
            error_trw.innerHTML = "Hurray! code is valid";
        }   else {
            error_trw.innerHTML = "Try Again! Valid code is v300";
        }
}