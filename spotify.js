console.log("hi");
let songIndex = 0;
let audioe = new Audio("krishna-flute-2669.mp3" );
let masterPlay = document.getElementById('masterplay');
let mypbar = document.getElementById("mypbar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName('songItem'));
let msn=document.getElementById("msn")


let songs = [
    {songName: "Radha", filePath: "1.mp3",coverPath: "IMG_20210623_075815_142.jpg" },
    { songName: "flute", filePath: "2.mp3",coverPath: "Screenshot_20220119-205201~2.png"},
    { songName: "Simran", filePath: "3.mp3", coverPath: "imag (2).PNG" },
    { songName: "Radha", filePath: "4.mp3", coverPath: "IMG_20210623_075815_142.jpg" },
    { songName: "Radha", filePath: "5.mp3", coverPath: "IMG_20210623_075815_142.jpg" },
]
songItem.forEach((element, i) => {
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;

})
masterPlay.addEventListener('click', () => {
    if (audioe.paused || audioe.currentTime <= 0) {
        audioe.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioe.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioe.addEventListener('timeupdate', () => {

    progress = parseInt((audioe.currentTime / audioe.duration) * 100);

    mypbar.value = progress;
})
mypbar.addEventListener('change', () => {
    audioe.currentTime = mypbar.value * audioe.duration / 100;
})
const makeallplays= ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=> {
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
})
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=> {
    element.addEventListener('click', (e) => {
        makeallplays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioe.src=`songs/${songIndex+1}.mp3`;
        msn.innerText=songs[songIndex].songName;
        audioe.currentTime=0;
        audioe.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>5){
        songIndex=0;
    }
    else{
    songIndex+=1;
    }
    audioe.src=`songs/${songIndex+1}.mp3`;
    msn.innerText=songs[songIndex].songName;
        audioe.currentTime=0;
        audioe.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
    songIndex-=1;
    }
    audioe.src=`songs/${songIndex+1}.mp3`;
    msn.innerText=songs[songIndex].songName;
        audioe.currentTime=0;
        audioe.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

