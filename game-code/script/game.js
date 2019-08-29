const SOUNDS = {
    gameMusic: "music/Under-Pressure.mp3",
    gameOverMusic: "music/scream.mp3",
    winMusic: "music/crowd.mp3",
  };

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.dancer = new Dancer (this);
        this.grid = new Grid (this);
        this.logo = new Logo (this);
        this.comands = new Comands (this, this.dancer);
        this.ScoreBoard = new ScoreBoard(this);
        this.GameOver = new GameOver(this);
        this.score = 20;
        this.timer = 0;
        this.speed = 1000;

        this.activeCircles = {
            up: false,
            down: false,
            middle: false,
            right: false,
            left: false
        }

        this.setCircles();

        this.callbacks = {
            middle: () => this.dancer.dancerDirection = "middle",
            up: () => this.dancer.dancerDirection = "up",
            left: () => this.dancer.dancerDirection = "left",
            right: () => this.dancer.dancerDirection = "right",
            down: () => this.dancer.dancerDirection = "down",
            stop: () => this.dancer.dancerDirection = "stop",
        };
        this.control = new Control(this.callbacks);
        this.control.setKeyBindings();    

       
        this.sound = new Sound();
        this.sound.loadSounds(SOUNDS);
    }

    setCircles () {
        let circles = ['up', 'down', 'middle', 'right', 'left'];
        this.randomCircle = circles[Math.floor(Math.random() * circles.length)];
    
        this.activeCircles = {
            up: false,
            down: false,
            middle: false,
            right: false,
            left: false
        }
        this.activeCircles[this.randomCircle] = true;

    }

    checkIfRight () {
        let circle = Object.entries(this.activeCircles).reduce(function (direction, value) {
            if (value[1] === true) {
                return value[0];
            } else {
                return direction;
            }
        }, null);
        const dancerDirection = this.dancer.dancerDirection;

        if (dancerDirection === circle) {
            this.score += 5;
        } else {
            this.score -= 5;
        }

        if (this.score === 300){
            this.gameWin();
        }

        if (this.score <= -5){
            this.gameOver();
        
        }
        this.dancer.dancerDirection = 'stop';
    }


    start(){
        this.sound.play('gameMusic', { volume: 1 });
        setTimeout (() => {
            this.loop(0)
        }, 500);
    }

    // gameWin(){
    //     this.GameWin.paint();
    //     this.sound.play('winMusic', { volume: 1 });
    //     this.sound.stop('gameMusic');
    //     randomCircle = false;
    // }

    gameOver(){
        this.GameOver.paint();
        this.sound.play('gameOverMusic', { volume: 1 });
        this.sound.stop('gameMusic');
        randomCircle = false;
        
    }
       
    runLogic(){
        this.checkIfRight();
        this.setCircles();
    }
    
    loop (timestamp) {
        
        if (this.timer < timestamp - this.speed) {
            this.runLogic();
            this.timer = timestamp;
        }
        // Paint game state
        this.paint();
        // Run loop again
        window.requestAnimationFrame(timestamp => {
            this.loop(timestamp);
        });
    }

    paint () {
        this.context.clearRect(0,0, 900, 600);
        this.grid.paint();
        this.logo.paint();
        this.dancer.paint();
        this.comands.paint();
        this.ScoreBoard.paint();
        
    }

}