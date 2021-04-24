

var removeBtn=document.getElementsByClassName('remove-item');

for( var i=0; i< removeBtn.length; i++) {
    var button = removeBtn[i];
    button.addEventListener('click',removeCartItem);
    
}

  
 
    
function removeCartItem(event){
    var btnClick=event.target;
    btnClick.parentElement.parentElement.remove();
    updateCartTotal()

   
}

// var quantityInputs=document.getElementsByClassName('quantity-amount');
// for (var i = 0; i < quantityInputs.length; i++) {
//     var input = quantityInputs[i];
//     input.addEventListener('change',quantityChanged);
    
// }
// function quantityChanged(event){
//     var input=event.target;
//     if(isNaN(input.value)|| input.value <=0){
//         input.value = 1;
//     }
//     updateCartTotal()

// }





 var value,
    quantity = document.getElementsByClassName('quantity-container');

        function createBindings(quantityContainer) {
      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
      var increase = quantityContainer.getElementsByClassName('increase')[0];
      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
      increase.addEventListener('click', function () { increaseValue(quantityAmount); });
      decrease.addEventListener('click', function () { decreaseValue(quantityAmount); });
      updateCartTotal();
    }

    function init() {
        for (var i = 0; i < quantity.length; i++ ) {
            var quantityElement=quantity[i];
                    createBindings(quantityElement);
                    updateCartTotal()
                    
                   
                   
        }
    };

    function increaseValue(quantityAmount) {
        value = parseInt(quantityAmount.value, 10);
       // console.log(quantityAmount, quantityAmount.value);
        value = isNaN(value) ? 0 : value;
        value++;
        quantityAmount.value = value;
    }

    function decreaseValue(quantityAmount) {
        value = parseInt(quantityAmount.value, 10);

        value = isNaN(value) ? 0 : value;
        if (value > 0) value--;

        quantityAmount.value = value;
    }

    init();
    
 
    
 
    //function updateCartTotal(){
        // var cartItemContainer=document.getElementsByClassName('cart-items')[0];
        
        // var cartRows=cartItemContainer.getElementsByClassName('cart-item');
        // var total=0;
        // for (var i = 0; i < cartRows.length; i++) {
        //     var cartRow = cartRows[i];
        //     var priceElement=cartRow.getElementsByClassName('cart-price')[0];
        //     var quantityElement=cartRow.getElementsByClassName('quantity-amount')[0];
        //     // console.log(priceElement,quantityElement);
        //     //var price=priceElement.innerText;
            
           


        //     var price=parseFloat(priceElement.innerText.replace('$',''));
            
            
        //      var quantity=quantityElement.value;
        //      //console.log(price*quantity);
            
        //      total=total+(price*quantity);
           
           
            
        // }
        // total=Math.round(total*100) / 100
        //  document.getElementsByClassName('total')[0].innerText='$'+total;
        
    // }
        




