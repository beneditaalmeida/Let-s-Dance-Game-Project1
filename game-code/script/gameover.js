class GameOver{
    constructor (game) {
        this.game = game;
        this.overImage = new Image ();
        this.overImage.src = 'images/game-over.png';
        }
    


    paint() {
        const context = this.game.context;
        const width = this.game.canvas.width;
        const height = this.game.canvas.height;
        const overWidth = this.overImage.width;
        const overHeight = this.overImage.height;
        context.drawImage(this.overImage, 75, 200, overWidth, overHeight);

    }
}