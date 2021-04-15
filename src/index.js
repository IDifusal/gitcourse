import mediaPlayer from './mediaPlayer.js';
import autoPlay from './plugins/Autoplay.js';
import autoPause from './plugins/AutoPause.js';   
//Variables
const video = document.querySelector("video");
const buttonPlay = document.querySelector("#play");
const buttonMute = document.querySelector("#mute");

//Nueva instancia y creando evento al click
const player = new mediaPlayer({ el: video, plugins:[
    //new autoPlay()
    new autoPlay(),
    new autoPause()
],
 });
buttonPlay.onclick = () => player.togglePlay();

buttonMute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error =>{
        console.log(error.message)
    })
}