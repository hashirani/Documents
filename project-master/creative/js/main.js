const menu = document.getElementById('menu')
var isMenuOpen = false;

menu.style.height= 0
menu.style.display= 'none' 

const menuToogle = () =>{
    if (isMenuOpen=== true){
        menu.style.display= 'none'
        menu.style.height= 0       
        isMenuOpen = false
    }
    else{
        menu.style.display= 'flex' 
        menu.style.height= '55vh'
        isMenuOpen = true
    }
}


// chage nav color on scroll

var navbar = document.querySelector('nav')

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     navbar.classList.add('scrolled')
//   } else {
//     navbar.classList.remove('scrolled')
//   }
//   prevScrollpos = currentScrollPos;
// }

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 200) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}
