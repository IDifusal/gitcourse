import mediaPlayer from './mediaPlayer.js';
import autoPlay from './plugins/Autoplay.js';
//Variables
const video = document.querySelector("video");
const button = document.querySelector("button");

//Nueva instancia y creando evento al click
const player = new mediaPlayer({ el: video, plugins:[
    new autoPlay()
] });
button.onclick = () => player.togglePlay();
