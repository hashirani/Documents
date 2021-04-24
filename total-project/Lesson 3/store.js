//remove btn part

    var removeBtn=document.getElementsByClassName("btn-danger");
    for(i=0; i<removeBtn.length;i++){
        var button=removeBtn[i]
        button.addEventListener('click',removeCartItem)
          
         }

    var quantityInputs=document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change',quantityChange)  
    }
//button part
   var addToCartButtons = document.getElementsByClassName('shop-item-button');
   for (var i = 0; i < addToCartButtons.length; i++) {
       var button = addToCartButtons[i];
       button.addEventListener('click',addToCartClicked);
       }
       
document.getElementsByClassName('btn-purchase')[0].addEventListener('click',
purchaseClicked);


function purchaseClicked(){
    alert('Thank you for purchase');
    var cartItems=document.getElementsByClassName('cart-items')[0];
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
}
function removeCartItem(event){
    var btnClick=event.target;
    btnClick.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChange(event){
    var input=event.target;
    if(isNaN(input.value)|| input.value <=0){
        input.value = 1;
    }
    updateCartTotal()

}
function addToCartClicked(event){
   var button=event.target;
   var shopItem = button.parentElement.parentElement;
   var title=shopItem.getElementsByClassName('shop-item-title')[0].innerText;
   var price=shopItem.getElementsByClassName('shop-item-price')[0].innerText;
   var imageSrc=shopItem.getElementsByClassName('shop-item-image')[0].src;

   //console.log(title,price,imageSrc);
   addItemToCart(title,price,imageSrc);
   updateCartTotal();
}


function addItemToCart(title,price,imageSrc){
var cartRow=document.createElement('div');
cartRow.classList.add('cart-row');
var cartItems=document.getElementsByClassName('cart-items')[0];
var cartItemName=document.getElementsByClassName('cart-item-title');
for (var i = 0; i < cartItemName.length; i++) {
if(cartItemName[i].innerHTML==title){
    alert("This item is added to the cart");
    return;
}
    
}
var cartRowContents = `
<div class='cart-item cart-column'>
<img class='cart-item-image' src='${imageSrc}'
width='100' height="100">
<span class='cart-item-title'>${title}</span>
</div>
<span class='cart-price cart-column'>${price}</span>
<div class='cart-quantity cart-column'>
<input class='cart-quantity-input'type='number' value='1'>
<button class='btn btn-danger'
 type='button'>REMOVE</button>
 </div>
`
cartRow.innerHTML=cartRowContents
cartItems.append(cartRow);
cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem);
cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChange);
}


//price and quantity part
function updateCartTotal(){
var cartItemContainer=document.getElementsByClassName('cart-items')[0];

var cartRows=cartItemContainer.getElementsByClassName('cart-row');
var total=0;
for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement=cartRow.getElementsByClassName('cart-price')[0];
    var quantityElement=cartRow.getElementsByClassName('cart-quantity-input')[0];
    var price=parseFloat(priceElement.innerText.replace('$',''));
    var quantity=quantityElement.value;
    total=total+(price*quantity);
   
    
}
total=Math.round(total*100) / 100
document.getElementsByClassName('cart-total-price')[0].innerText='$'+total;
}