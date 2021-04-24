

var generateButton = document.getElementById('btn1').addEventListener('click',generate);
var generator= document.getElementById('input')
  
   function generate(){
    var a =Math.random();  
     var b=a*1000;   
     var generateValue=Math.round(b);  
     generator.value=generateValue;      
}

var inPut = document.getElementById('calculato');
  
function caculator(data){  
    switch(data){       
        case 'c':
           inPut.value = "";   
     break;
     case '<':
        inPut.value = inPut.value.substr(
             0,inPut.value.length-1);       
     break;
        
     default:        
     inPut.value += data;      
    }   
}


var gode=document.getElementById('gode');
var bad=document.getElementById('bad');
var submitBtn=document.getElementById('btn').addEventListener('click',submitButton);

function submitButton(){
    if(generator.value === inPut.value){
       gode.style.display='block'
       bad.style.display='none'
  
    }
    else{
        gode.style.display='none'
       bad.style.display='block'
       noti();
    }   
}

var notify=document.getElementById('notify-try');

var count=3;
function noti(){
    count=count-1;
  if(count==0) {
    notify.innerHTML =count;
    alert("Try again");
   }
   else{
    notify.innerHTML =count;
    
    }   
}



  
   






   


