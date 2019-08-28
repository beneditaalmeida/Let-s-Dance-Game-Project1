class Logo {
    constructor (game){
        this.game = game;
        this.logoImage = new Image ();
        this.logoImage.src = 'images/logo.png';
    }

    paint (){
        const context = this.game.context;
        const width = this.game.canvas.width;
        const height = this.game.canvas.height;
        const logoWidth = this.logoImage.width;
        const logoHeight = this.logoImage.height;
        context.drawImage(this.logoImage, 400, 0, logoWidth, logoHeight);
        
    }
}