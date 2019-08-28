class Dancer{
    constructor (game) {
        this.game = game;
        this.dancerDirection = "stop"

        const imageStop = new Image();
        imageStop.src = "./images/dance-pos-stop.png";
        const imageMiddle = new Image();
        imageMiddle.src = "./images/dance-pos-middle.png";
        const imageUp = new Image();
        imageUp.src = "./images/dance-pos-up.png";
        const imageDown = new Image();
        imageDown.src = "./images/dance-pos-down.png";
        const imageRight = new Image();
        imageRight.src = "./images/dance-pos-right.png";
        const imageLeft = new Image();
        imageLeft.src = "./images/dance-pos-left.png";

        this.images = {
            stop: imageStop,
            middle: imageMiddle,
            up: imageUp,
            down: imageDown,
            right: imageRight,
            left: imageLeft,
        }
    }


    paint() {
        let image;
        image = this.images[this.dancerDirection];
        if(image.complete) {
            this.game.context.drawImage(image, 0,0 , image.width , image.height);
        } else {
            image.addEventListener('load',  () => {   
                this.game.context.drawImage(image, 0,0 ,image.width , image.height);
            });
        }

    }
}