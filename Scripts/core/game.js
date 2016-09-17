var canvas;
var stage;
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", gameLoop, this);
}
function gameLoop(event) {
    var myNewText = new createjs.Text("Hello", "60px Consolas", "#000");
    stage.addChild(myNewText);
    stage.update();
}
window.onload = init;
//# sourceMappingURL=game.js.map