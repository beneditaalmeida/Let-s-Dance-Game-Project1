class GameWin{
    constructor (game) {
        this.game = game;
        this.winImage = new Image ();
        this.winImage.src = 'images/winner.png';
        }
    


    paint() {
        const context = this.game.context;
        const width = this.game.canvas.width;
        const height = this.game.canvas.height;
        const winWidth = this.winImage.width;
        const winHeight = this.winImage.height;
        context.drawImage(this.winImage, 20, 150, winWidth, winHeight);

    }
}