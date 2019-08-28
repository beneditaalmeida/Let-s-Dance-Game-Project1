class Comands{
    constructor (game) {
        this.game = game;
        this.widthX = 850
        this.widthY = 750
        this.widthZ = 650
        this.heightX = 550
        this.heightY = 450
        this.heightZ = 350

    }

    _paintCircle (x, y, active) {
        const context = this.game.context;

        context.fillStyle = active ? "pink" : "black";
        context.beginPath();
        context.arc (x,y,45 , 0, Math.PI * 2)
        context.fill();
        context.closePath();
    }

    paint(){
        const context = this.game.context;
        const comands = this.game.comands;
        const width = this.game.canvas.width;
        const height = this.game.canvas.height;

        const activeCircles = this.game.activeCircles;
        
        context.save();

        this._paintCircle(this.widthX,this.heightY, activeCircles.up)
        this._paintCircle(this.widthY,this.heightY, activeCircles.down)
        this._paintCircle(this.widthZ,this.heightY, activeCircles.middle)
        this._paintCircle(this.widthY,this.heightZ, activeCircles.right)
        this._paintCircle(this.widthY,this.heightX, activeCircles.left)

        context.restore();

    }
}