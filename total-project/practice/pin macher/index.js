

var generateButton = document.getElementById('btn').addEventListener('click',generate);

var outPutGenerator=document.getElementById('output');
   function generate(){
    var x=Math.random();
    // console.log(x)
     var x1=x*1000;
     //console.log(x1)
     var y=Math.round(x1);
    
     //console.log(y);
  
     outPutGenerator.value=y;
     
}

var outPutCaluator=document.getElementById('output-calculator');
function calculator(data){
    //console.log(data)
    
    switch(data){
        case '<':
            outPutCaluator.value =  outPutCaluator.value.substr(0, outPutCaluator.value.length-1);
        
        break;

        case 'c':
            outPutCaluator.value="";
         break;

         default:
                outPutCaluator.value +=data;
            
    }
       }

 function clicksubmit(){
       

        
 
    if(outPutGenerator.value === outPutCaluator.value){
        document.getElementById('notify-submit1').style.display='block';


        document.getElementById("notify-submit").style.display='none';
       }

   
    else{
       
        document.getElementById('notify-submit1').style.display='none';


        document.getElementById("notify-submit").style.display='block'; 
        var tryLeft=document.getElementById("try-left");
        tryLeft.innerHTML=parseInt(tryLeft.innerHTML)-1;
        
        if(tryLeft.innerHTML==0){
    
        alert("Now don't try.Late try.");
    }


  

    }

    
   
}












   


