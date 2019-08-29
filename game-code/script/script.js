window.onload = function(){
    document.getElementById("start-game").onclick = function (){
        const $canvas = document.querySelector('canvas');
        const game = new Game($canvas);
        game.start();
    }
}