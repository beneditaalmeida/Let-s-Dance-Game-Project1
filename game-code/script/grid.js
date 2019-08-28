class Grid{
    constructor(game) {
        this.game = game;
        
    }
    paint () {
        const context = this.game.context;
        const grid = this.game.grid;
        const width = this.game.canvas.width;
        const height = this.game.canvas.height;

        function drawGrid() {
            for(let x=0; x <= width; x += width/9) {
                context.beginPath();
                context.moveTo(x,0);
                context.lineTo(x,height);
                //context.stroke();
            };
            
            for(let y=0; y <= height; y += height/6) {
                context.beginPath();
                context.moveTo(0,y);
                context.lineTo(width,y);
                //context.stroke();
            }   
        }
        drawGrid()
      }

}