
let loCation = document.getElementById("loca");
let tempIcon = document.getElementById("temp-icon");
let tempValue = document.getElementById("temp-value");
//console.log(tempValue);
let climate = document.getElementById("climate");
let sunSet = document.getElementById("sun-set");
let sunRise = document.getElementById("sun-rise");
let iconImg=document.getElementById("temp-icon");


const abc="9cf95bafa09d3122a535c9ce9386b31f";


let clock = document.getElementById('date');

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)


let searchInput = document.getElementById("input");
let searchButton = document.getElementById("button");

searchButton.addEventListener("click",(e)=>{
    //console.log('bbbbb')
    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value='';
})

const getWeather=async (city)=>{
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${abc}`,
        //{mode:'cors'}
        );


const weatherData=await response.json();
console.log(weatherData);
const {name} = weatherData;
const { temp,feels_like} = weatherData.main;
const {id,main,icon} = weatherData.weather[0];
const{sunset,sunrise}=weatherData.sys;
const urlImg =`https://openweathermap.org/img/wn/${icon}@2x.png`;
loCation.textContent=name;
climate.textContent=main;
iconImg.src=urlImg;
tempValue.textContent=Math.round((temp-273.15));
sunRise.textContent=(new Date(sunrise*1000)).toLocaleTimeString();
sunSet.textContent=(new Date(sunset*1000)).toLocaleTimeString();
}

catch(error)
{
  alert('city not found') ; 
}
};


window.addEventListener("load",()=>{

let long;
let lat;

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position)=>
    {
    long=position.coords.longitude;
    lat=position.coords.latitude;

 
    

    const api =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${abc}&units=metric`;


    fetch(api)
    .then(response =>{
        return response.json();
    })
       
    .then((data)=>{
      //console.log(data)
        const {name} = data;
        const { temp,feels_like} = data.main;
        const {id,main,icon} = data.weather[0];
        const{sunset,sunrise}=data.sys;
        const urlImg =`https://openweathermap.org/img/wn/${icon}@2x.png`;
        //console.log(urlImg);
        loCation.textContent=name;
        climate.textContent=main;
        iconImg.src=urlImg;
        tempValue.textContent=Math.round(temp);
        sunRise.textContent=(new Date(sunrise*1000)).toLocaleTimeString();
        sunSet.textContent=(new Date(sunset*1000)).toLocaleTimeString();
        
    })

})

}

})