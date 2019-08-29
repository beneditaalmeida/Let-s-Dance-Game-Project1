class ScoreBoard {
    constructor (game) {
      this.game = game;
      this.context = this.game.context;
    }

  
    paint () {
      this.context.save();
      this.context.translate(50, 450);
      this.context.font = '62px Impact';
      this.context.fillStyle = 'black';
      this.context.fillText(`${ this.game.score }`, 300, 125);
      this.context.restore();
    }
  }