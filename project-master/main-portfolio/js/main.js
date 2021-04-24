const checkAbout = () =>{
    sessionStorage.setItem("pg", "02");
    document.getElementById('active-pg').innerHTML =sessionStorage.getItem("pg");
    
}