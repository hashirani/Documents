
let addBtn=document.getElementsByClassName("btn-success");
for(let i=0; i<addBtn.length;i++){
    let button=addBtn[i]
    button.addEventListener('click',addbtn)
        }
     //console.log(addBtn.length)
     let singleLyrics= document.getElementsByClassName('single-lyrics')[0];
 let artistName = document.getElementById("tar");
// let autherName = document.getElementById("auther");
let searchInput = document.getElementById("input");
let searchButton = document.getElementById("btn");
searchButton.addEventListener("click",function(e){
    //console.log('bbbbb');
    e.preventDefault();
    input = searchInput.value.trim();
    searchInput.value=''; 
  

    if(!input){
        alert("There is nothing to search")
    }
    else{ 
        getLyrics(input);
    }   
});
const apiURL = 'https://api.lyrics.ovh';

function getLyrics(input){
fetch(`${apiURL}/suggest/${input}`)
    .then(response =>{
    return response.json();
     })
    .then((maindata)=>{
        //console.log(maindata)
     for (let i = 0; i < 10; i++) {
    const {title} =maindata.data[i].album;
    const {name,link} =maindata.data[i].artist;
    adddiv(name,title);
  
    }
   }); 
   
}


function adddiv(name,title){
    let searchResult=document.createElement('div');
    searchResult.classList.add('search-result');
      
       //console.log(singleLyrics)
        let creatDiv=`<div class="single-result row align-items-center my-3 p-3 col-md-8 mx-auto py-4">
        <div class="col-md-9">
            <h3 class="lyrics-name"><span id="name">${name}</span> </h3>
            <p class="author lead">Album by <span id="auther">${title}</span></p> </div>
            <div class="col-md-3 text-md-right text-center">
                <button data-artist="${name}"  data-songtitle="${title}" class="btn btn-success">Get Lyrics</button>
            </div>
        </div>`
        searchResult.innerHTML=creatDiv;
        singleLyrics.append(searchResult);
        searchResult.getElementsByClassName('btn-success')[0].addEventListener('click',addbtn);
       
   }
   function addbtn(event){
    //console.log('jjjj')
    const clickedElement=event.target;
    if (clickedElement.tagName === 'BUTTON'){
        const artist = clickedElement.getAttribute('data-artist');
        const songTitle = clickedElement.getAttribute('data-songtitle');
        
        getLyrics1(artist, songTitle)
    }

}
  
//   function getLyrics1(artist,songTitle){
//     fetch(`${apiURL}/v1/${artist}/${songTitle}`)
//         .then(response =>{
//         return response.json();
//          })
//         .then((maindata)=>{
//             //console.log(maindata)
//     //      for (let i = 0; i < 4; i++) {
//     // const {title} =maindata.data[i].album;
//     // const {name,link} =maindata.data[i].artist;
//     const lyrics = maindata.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
//     console.log(lyrics)
//          singleLyrics.innerHTML = `<h2><strong>${artist}</strong> -${songTitle}</h2>
//       <p>${lyrics}</p>`;
         
     
// });
// }
// result.addEventListener('click', e=>{
//     const clickedElement = e.target;

//     //checking clicked elemet is button or not
//     if (clickedElement.tagName === 'SPAN'){
//         const artist = clickedElement.getAttribute('data-artist');
//         const songTitle = clickedElement.getAttribute('data-songtitle');
        
//         getLyrics(artist, songTitle)
//     }
// })

// Get lyrics for song
async function getLyrics1(artist, songTitle) {
    const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
    const data = await res.json();
  console.log(data)
    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
    console.log(lyrics)
    singleLyrics.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
    <p>${lyrics}</p>`;
  
  }
 
      
       
   
 