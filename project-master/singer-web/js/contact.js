var isNavOpen = false;
var header = document.getElementById("menu-list");
var btns = header.getElementsByClassName("menu-list-item");

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

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }
  
  
  
  
  var navbar = document.querySelector('nav')
  var topButton = document.querySelector('topButton')
  
  window.onscroll = function() {
  
    // pageYOffset or scrollY
    if (window.pageYOffset > 100) {
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