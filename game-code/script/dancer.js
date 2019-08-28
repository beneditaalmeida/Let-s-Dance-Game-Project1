class Dancer{
    constructor (game) {
        this.game = game;
        this.image = new Image()
        this.image.src = "./images/dance-pos-stop.png";
        this.dancerDirection = "stop"
    }


    paint() {
        if(this.dancerDirection === "middle"){
        this.image.src = "./images/dance-pos-middle.png";
        }
        if(this.dancerDirection === "up"){
        this.image.src = "./images/dance-pos-up.png";
        }
        if(this.dancerDirection === "left"){
        this.image.src = "./images/dance-pos-left.png";
        }
        if(this.dancerDirection === "right"){
        this.image.src = "./images/dance-pos-right.png";
        }
        if(this.dancerDirection === "down"){
        this.image.src = "./images/dance-pos-down.png";
        }
        if(this.dancerDirection === "stop"){
        this.image.src = "./images/dance-pos-stop.png";
        }
        if(this.image.complete){
            this.game.context.drawImage(this.image, 0,0 ,this.image.width , this.image.height);
        }else {
            this.image.addEventListener('load',  () => {   
            this.game.context.drawImage(this.image, 0,0 ,this.image.width , this.image.height);
            });  
        }

    }
}