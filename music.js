//initialize the variables
let songindex=1;
let audioElement= new Audio('/home/anusha318/Music/1.mp3');
let masterplay=document.getElementById("masterplay");
let progbar=document.getElementById("progressbar");
let g=document.getElementById("gif");
let play=document.getElementById("songplay");
let a=Array.from(document.getElementsByClassName("songplay"));
let m=document.getElementById("mastersongname");
let music;
audioElement.currentTime=0
progressbar.value=0;

let songs=[
{songname:"Hoyna Hoyna",filepath:"Music/1.mp3"},
{songname:"Maate vinadhuga",filepath:"Music/2.mp3"},
{songname:"Thattukolede",filepath:"Music/3.mp3"},
{songname:"karma theme",filepath:"Music/4.mp3"},
{songname:"Thuli Thuli",filepath:"Music/5.mp3"},
{songname:"mehabooba",filepath:"Music/6.mp3"},
{songname:"Amma song",filepath:"Music/7.mp3"},
{songname:"Lollipop",filepath:"Music/8.mp3"}
]


//play on click

masterplay.addEventListener('click',()=>{
    music();
})
music=()=>
{

if(audioElement.paused || audioElement.currentTime<=0)
{

a[songindex-1].classList.remove("fa-play");
a[songindex-1].classList.add("fa-pause");

audioElement.play();
masterplay.classList.remove("fa-play");
masterplay.classList.add("fa-pause");
m.innerText=songs[songindex-1].songname;
g.style.opacity=1;
}
else
{


audioElement.pause();
masterplay.classList.remove("fa-pause");
masterplay.classList.add("fa-play");
a[songindex-1].classList.remove("fa-pause");
a[songindex-1].classList.add("fa-play");
g.style.opacity=0;
}
}


//listen to events

audioElement.addEventListener('timeupdate',() => {


    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value=progress;
    if(progress==100)
    {
        
        songindex+=1;
        audioElement.src=`Music/${(songindex)}.mp3`;
        audioElement.play();
        audioElement.currentTime=0;
        makeplay();
        music();

    }
    
})

progbar.addEventListener('change',() => {


    //update seekbar 
    audioElement.currentTime=progressbar.value*audioElement.duration/100;
})





//playing songs when button at that song is clicked

const makeplay=()=>
{
    Array.from(document.getElementsByClassName("songplay")).forEach((element)=>
    {
       
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add("fa-play");

    })

}
const makeplay1=()=>
{
    Array.from(document.getElementsByClassName("songplay")).forEach((element)=>
    {
       
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
         

    })

}



Array.from(document.getElementsByClassName("songplay")).forEach((element)=>
{
element.addEventListener('click',()=>
{
   
    makeplay();
    songindex=parseInt(element.id); 
    
    if(!(audioElement.paused))
    {
        element.classList.add("fa-play");
        element.classList.remove("fa-pause");
        masterplay.classList.add("fa-play");
        masterplay.classList.remove("fa-pause");
        audioElement.pause();
        g.style.opacity=0;
     
    }

    else
    {
        element.classList.remove("fa-play");
        element.classList.add("fa-pause");
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
        audioElement.src=`Music/${(songindex)}.mp3`;
        audioElement.currentTime=0;
        m.innerText=songs[songindex-1].songname;
        audioElement.play();
        g.style.opacity=1;

    }

 
    


})

})



document.getElementById('next').addEventListener('click',()=>{
if(songindex>7){
    songindex=1;
}
else{
    songindex+=1;
}
audioElement.src=`Music/${(songindex)}.mp3`;
audioElement.play();
m.innerText=songs[songindex-1].songname;
makeplay1();
music();

})


document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=1){
        songindex=8;
    }
    else{
        songindex-=1;
    }
    
    audioElement.src=`Music/${(songindex)}.mp3`;
    audioElement.play();
    m.innerText=songs[songindex-1].songname;
    makeplay1();
    music();
})
    
/*menu styling and sticky navbar */
function myfunction() {
    var x = document.getElementById("mytopnav");
    if (x.className === "navbar") {
      x.className += "responsive";
    } else {
      x.className = "navbar";
    }
  }
  window.onscroll = function() {myFunction()};

  var y = document.getElementById("mytopnav");
  console.log(y);
  var sticky = y.offsetTop;
  

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      y.classList.add("sticky")
    } else {
      y.classList.remove("sticky");
    }
  }