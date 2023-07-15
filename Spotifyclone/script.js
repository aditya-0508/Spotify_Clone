let songIndex=0;// intializing the first song will be played 
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let Myprogress =document.getElementById('myProgress');
let songItems=Array.from(document.getElementsByClassName('songItem'));//kind of storing all the song items in an array so that changes can be done 

let songs=[
    {songName:"Warriyo-Mortals[NCS Release]", filePath: "songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Warriyo-Mortals[NCS Release]", filePath: "songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Warriyo-Mortals[NCS Release]", filePath: "songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Warriyo-Mortals[NCS Release]", filePath: "songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Warriyo-Mortals[NCS Release]", filePath: "songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Warriyo-Mortals[NCS Release]", filePath: "songs/6.mp3",coverPath:"covers/6.jpg"}
]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
});

//Handling Play and pause 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

//listen to the events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    Myprogress.value=progress;
})
Myprogress.addEventListener('change',()=>{
    audioElement.currentTime=Myprogress.value*audioElement.duration/100;
})

//this is when u click it ,it will change to play sign
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    })
})

//If someone clicks on next  button 
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>6){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

//If someone clicks on next button 
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

