window.onload = function(){
    document.getElementById("start-game").onclick = function (){
        document.getElementById("start-game").style.visibility="hidden";
        const $canvas = document.querySelector('canvas')
        const game = new Game($canvas);
        game.start();
    }
}