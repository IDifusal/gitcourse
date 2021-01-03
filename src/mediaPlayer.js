function mediaPlayer(video) {
    this.media = video.el;
    this.plugins = video.plugins || [];
    
    this._initPlugins();
}
mediaPlayer.prototype._initPlugins = function(){
    this.plugins.forEach( plugin =>{
        plugin.run(this);
    })
}

mediaPlayer.prototype.play = function () {
    this.media.play();
};

mediaPlayer.prototype.pause = function(){
    this.media.pause();
};

mediaPlayer.prototype.togglePlay = function(){
    if(this.media.paused){
        this.play();
    }else{
        this.pause();
    }
};

export default mediaPlayer;