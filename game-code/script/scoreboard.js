class ScoreBoard {
    constructor (game) {
      this.game = game;
      this.context = this.game.context;
    }

  
    paint () {
      this.context.save();
      this.context.translate(50, 450);
      this.context.font = '32px Arial';
      this.context.fillStyle = 'white';
      this.context.fillText(`Score ${ this.game.score }`, 550, -200);
      this.context.restore();
    }
  }