/**
 * @file game.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: September 17, 2016
 * @description: This file is the entry point for the game.
 * @version 0.1.0
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// GLOBAL VARIABLE DECLARATIONS
let canvas: HTMLElement;
let stage: createjs.Stage;

/**
 * This method is the entry point for the application.
 * 
 * @method init
 * @return {void}
 */
function init(): void {
    // create a reference to the HTML canvas Element
    canvas = document.getElementById("canvas");

    // create our main display list container
    stage = new createjs.Stage(canvas);

    // Enable mouse events, 20 frames per second; mouse events are resource intensive, so only enable them when required
    stage.enableMouseOver(20);

    // set the framerate to 60 frames per second
    createjs.Ticker.framerate = 60;

    // create an event listener to count off frames 
    createjs.Ticker.on("tick", gameLoop, this);
}

/**
 * Main game loop function which handles what happens with each "tick" or frame
 * 
 * @method gameLoop
 * @param {createjs.TickerEvent} event
 * @return {void}
 */
function gameLoop(event: createjs.TickerEvent): void {
    let myNewText: createjs.Text = new createjs.Text("Hello", "60px Consolas", "#000");

    stage.addChild(myNewText);

    // redraw/refresh stage with every frame
    stage.update();
}

window.onload = init;

 /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */