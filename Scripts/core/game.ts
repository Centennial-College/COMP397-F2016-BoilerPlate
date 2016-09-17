/**
 * @file game.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: September 17, 2016
 * @description: This file is the entry point for the game.
 * @version 0.1.0
 */

let canvas: HTMLElement;
let stage: createjs.Stage;

function init(): void {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", gameLoop, this);
}

function gameLoop(event: createjs.TickerEvent): void {
    let myNewText: createjs.Text = new createjs.Text("Hello", "60px Consolas", "#000");

    stage.addChild(myNewText);
    stage.update();
}

window.onload = init;