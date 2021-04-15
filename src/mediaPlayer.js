function mediaPlayer(video) {
    this.media = video.el;
    this.plugins = video.plugins || [];
    
    this._initPlugins();
}
mediaPlayer.prototype._initPlugins = function(){
    const player ={
        play: () => this.play,
        pause: () => this.pause(),
        media: this.media,
        get muted(){
            return this.media.muted;
        },

        set muted(value){
            this.media.muted=value
        }
    };


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

mediaPlayer.prototype.toggleMute = function(){
    if(this.media.muted){
        this.media.muted = false;
    }else{
        this.media.muted = true;
    }
};

export default mediaPlayer;