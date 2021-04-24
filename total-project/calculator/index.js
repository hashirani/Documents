

const toggleSwitch=document.querySelector(
    '.theme-switch input[type="checkbox"]'
    );
   //console.log(toggleSwitch);
   function switchTheme(e){
       if(e.target.checked){
           document.documentElement.setAttribute("data-theme","dark");
       }
       else{
        document.documentElement.setAttribute("data-theme","light"); 
       }
   }
      
   toggleSwitch.addEventListener("change",switchTheme, false);

   var inPut = document.getElementById('input');
   var outPut = document.getElementById('output');

   function caculator(data){
       switch(data){
           case 'AC':
        inPut.innerHTML = "";
        outPut.innerHTML = 0;
        break;
        case 'C':
            inPut.innerHTML = inPut.innerHTML.substr(
                0,inPut.innerHTML.length-1);
                outPut.innerHTML = math.evaluate(inPut.innerHTML)
                ===undefined ? 0: math.evaluate(inPut.innerHTML);
            break;
            case '=':
                outPut.innerHTML = math.evaluate(inPut.innerHTML);
                break;
        default:
            inPut.innerHTML += data;
       }
   }