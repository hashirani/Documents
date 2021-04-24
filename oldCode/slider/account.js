
const LoginForm = document.getElementById("LoginForm");
const RegForm = document.getElementById("RegForm");
const IndiCator = document.getElementById("Indicator");

function register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    IndiCator.style.transform = "translateX(100px)";
}
function login(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    IndiCator.style.transform = "translateX(0px)";
}