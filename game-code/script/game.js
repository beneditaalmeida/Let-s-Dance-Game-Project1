class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.dancer = new Dancer (this);
        this.grid = new Grid (this)
        this.comands = new Comands (this);
        this.counter = 0
        this.speed = 1.5
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
    }

    setCircles () {
        if (this.counter % this.speed === 0){
            let circles = ['up', 'down', 'middle', 'right', 'left'];
            let randomCircle = circles[Math.floor(Math.random() * circles.length)];
     
            this.activeCircles = {
                 up: false,
                 down: false,
                 middle: false,
                 right: false,
                 left: false
             }
             this.activeCircles[randomCircle] = true;

        }
    }
    
    loop () {
        this.counter++
        console.log (this.counter)

        // Run game logic
        this.setCircles();
        // Paint game state
        this.paint();
        // Run loop again
        // window.requestAnimationFrame(() => {
        //    this.loop();
        // });
        setTimeout(() => {
            this.loop();
        }, 300)
    }

    paint () {
        this.context.clearRect(0,0, 900, 600);
        this.dancer.paint();
        this.grid.paint();
        this.comands.paint();
      }

}