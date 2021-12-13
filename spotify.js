console.log("welcome to spotify");
let songIndex=0;
var audio1 = new Audio('1.mp3');
let playmg = document.querySelector('.plimg');
let progressbar = document.querySelector('#myProgressBar');
let gif = document.querySelector('.gif');
let sng = Array.from(document.getElementsByClassName('cont1'));
ply=Array.from(document.getElementsByClassName('play'));
let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
];
console.log(songs);
sng.forEach((element,i)=> {
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName('song')[0].innerText=songs[i].songName;


})

ply.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e);
        
        songIndex = parseInt(e.target.id);
        console.log(songIndex);
        audio1.src = `songs/${songIndex+1}.mp3`;
        audio1.currentTime = 0;
        audio1.play();
        gif.style.opacity=1;


    })

    })
    document.getElementById('next').addEventListener('click', ()=>{
        if(songIndex>=9){
            songIndex = 0
        }
        else{
            songIndex += 1;
        }
        audio1.src = `songs/${songIndex+1}.mp3`;
        
        audio1.currentTime = 0;
        audio1.play();
        gif.style.opacity=1;
        
    })
    document.getElementById('previous').addEventListener('click', ()=>{
        if(songIndex<=0){
            songIndex = 0
        }
        else{
            songIndex -= 1;
        }
        audio1.src = `songs/${songIndex+1}.mp3`;
        
        audio1.currentTime = 0;
        audio1.play();
        gif.style.opacity=1;
        
    })


playmg.addEventListener('click', () => {
    
    if (audio1.paused || audio1.currentTime<=0 ){
        audio1.play();
        gif.style.opacity=1;
    }
    else{
        audio1.pause();
        gif.style.opacity=0;
    }
        


});
audio1.addEventListener('timeupdate', ()=>{
    
    progress = parseInt((audio1.currentTime/audio1.duration)*100);
    
    
    progressbar.value = progress;

})
progressbar.addEventListener('change', ()=> {
    audio1.currentTime=progressbar.value *audio1.duration/100;
})
