
const nav = document.querySelector('.nav')
const logo = document.querySelector('.logo')
const line = document.querySelector('.menu')
const menu = document.querySelector('.menu')
const typing = document.querySelector('.typing')

var isNavOpen = false;




if (isNavOpen === false){
    openNav = () =>{
        nav.style.height = '5vh'
        nav.style.display = 'block'
        logo.style.display = 'none'
        menu.style.display = 'none'
        
    }
}
else{
    openNav = () =>{
        nav.style.width = '0px'
        logo.style.display = 'inline-block'
        
    }
}


var typeString = ['नमस्ते', 'Hi', 'Hello', 'Hola', '你好','Salut'];
      var  i = 0;
      var count = 0
      var selectedText = '';
      var text = '';
      (function type() {
        if (count == typeString.length) {
          count = 0;
        }
        selectedText = typeString[count];
        text = selectedText.slice(0, ++i);
        document.getElementById('typing').innerHTML = text;
        if (text.length === selectedText.length) {
          count++;
          i = 0;
        }
        setTimeout(type, 500);
      }());

      function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      }


/*********************************************** */
