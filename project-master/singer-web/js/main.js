var header = document.getElementById("menu-list");
var btns = header.getElementsByClassName("menu-list-item");
var isNavOpen = false;

var typeString = ['Hi', 'Hello', 'Hola', '你好','Salut'];
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


  

openMenu =()=>{
  if(isNavOpen===false){
    document.getElementById('mobile-menu').style.height='100%'
    document.getElementById('mobile-menu').style.position='fixed'
    isNavOpen = true;
  }
  else{
    closeMenu()
  }


}

closeMenu =()=>{
  document.getElementById('mobile-menu').style.position='absolute'

  document.getElementById('mobile-menu').style.height='00%'
  isNavOpen = false;
}


// Change Active class\


for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}




var navbar = document.querySelector('nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }

  if (window.pageYOffset > 300) {
    document.getElementById("myDIV").classList.add('none')
} else {
    document.getElementById("myDIV").classList.remove('none')
  }
}