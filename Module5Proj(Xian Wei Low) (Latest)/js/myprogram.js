"use strict";
/* 
 * Copyright (c) 2012, 2016 Carson Cheng.
 * Licensed under the MIT-License (http://opensource.org/licenses/MIT)
 * which can be found in the file MIT-LICENSE.txt in the LICENSE directory
 * at the root of this project distribution.
 */
// There are a bunch of special variables and functions.
// Here are some notable ones, but there are many more:
// setup, draw, PLAYGROUND_WIDTH, PLAYGROUND_HEIGHT

soundManager.setup({
    url: 'js/libs/soundmanager2.swf/',
});
var mySound = soundManager.createSound({
    id: 'backgroundMusic',
    url: 'js/libs/music.mp3',
    volume: 1,
    autoPlay: false,
    autoLoad: false,
    multiShot: true
});

var hitSound = soundManager.createSound({
    id: 'Hit',
    url: 'js/libs/hit.mp3',
    volume: 1,
    autoPlay: false,
    autoLoad: false,
    multiShot: true
});

var loseSound = soundManager.createSound({
    id: 'Lose',
    url: 'js/libs/loseMusic.mp3',
    volume: 1,
    autoPlay: false,
    autoLoad: false,
    multiShot: true
});

var endingSound = soundManager.createSound({
    id: 'endingMusic',
    url: 'js/libs/endingMusic.mp3',
    volume: 0.5,
    autoPlay: false,
    autoLoad: false,
    multiShot: true
});

var setup = function () {

    var backgroundGroupName = "backgroundGroup";
    createGroupInPlayground(backgroundGroupName);

    var enemiesGroupName = "enemyGroup";
    createGroupInPlayground(enemiesGroupName);

    var duckGroupName = "duckGroup";
    createGroupInPlayground(duckGroupName);

    var playerGroupName = "playerGroup";
    createGroupInPlayground(playerGroupName);

    var collidingGroupName = "collidingGroup";
    createGroupInPlayground(collidingGroupName);

    var bossGroupName = "bossGroup";
    createGroupInPlayground(bossGroupName);

    var screenGroupName = "screenGroup";
    createGroupInPlayground(screenGroupName);


    createSpriteInGroup(backgroundGroupName, backgroundDictionary["sprite2"], backgroundDictionary["animation"], backgroundDictionary["width"], backgroundDictionary["height"]);
    spriteSetX(backgroundDictionary["sprite2"], backgroundDictionary["width"]);

    createSpriteInGroup(backgroundGroupName, backgroundDictionary["sprite"], backgroundDictionary["animation"], backgroundDictionary["width"], backgroundDictionary["height"]);



    createSpriteInGroup(playerGroupName, mainCharacterDictionary["sprite"], mainCharacterDictionary["standingAnimation"], mainCharacterDictionary["width"], mainCharacterDictionary["height"]);
    spriteSetXY(mainCharacterDictionary["sprite"], mainCharacterDictionary["xpos"], mainCharacterDictionary["ypos"]);


    createSpriteInGroup(collidingGroupName, bulletDictionary["sprite"], bulletDictionary["animation"], bulletDictionary["width"], bulletDictionary["height"]);
    spriteSetXY(bulletDictionary["sprite"], bulletDictionary["xpos"], bulletDictionary["ypos"]);


    createTextSpriteInGroup(collidingGroupName, "text1", 65, 65);
    spriteSetXY("text1", 300, 200);
    sprite("text1").css("background-color", "rgba(0,0,0,0)");
    sprite("text1").css("font-weight", "bold");

    createTextSpriteInGroup(collidingGroupName, "healthText", 50000, 17);
    spriteSetXY("healthText", 30, 30);
    sprite("healthText").css("background-color", "rgba(0,0,0,0)");
    sprite("healthText").css("font-weight", "bold");

    createSpriteInGroup(collidingGroupName, fruitDictionary["sprite"], fruitDictionary["animation"], fruitDictionary["width"], fruitDictionary["height"]);
    spriteSetXY(fruitDictionary["sprite"], -500, -500);

    createSpriteInGroup(enemiesGroupName, rhinoDictionary["sprite"], rhinoDictionary["moving"], rhinoDictionary["width"], rhinoDictionary["height"]);
    spriteSetXY(rhinoDictionary["sprite"], rhinoDictionary["xpos"], rhinoDictionary["ypos"]);

    createSpriteInGroup(enemiesGroupName, bearDictionary["sprite"], bearDictionary["animation"], bearDictionary["width"], bearDictionary["height"]);
    spriteSetXY(bearDictionary["sprite"], bearDictionary["xpos"], bearDictionary["ypos"]);


    createSpriteInGroup(bossGroupName, fishDictionary["sprite"], fishDictionary["animation"], fishDictionary["width"], fishDictionary["height"]);
    spriteSetXY(fishDictionary["sprite"], fishDictionary["xpos"], fishDictionary["ypos"]);

    createSpriteInGroup(duckGroupName, duckDictionary["sprite"], duckDictionary["anim"], duckDictionary["width"], duckDictionary["height"]);
    spriteSetXY(duckDictionary["sprite"], duckDictionary["xpos"], duckDictionary["ypos"]);

    createSpriteInGroup(duckGroupName, duckDictionary2["sprite"], duckDictionary2["anim"], duckDictionary2["width"], duckDictionary2["height"]);
    spriteSetXY(duckDictionary2["sprite"], duckDictionary2["xpos"], duckDictionary2["ypos"]);

    createSpriteInGroup(duckGroupName, duckDictionary3["sprite"], duckDictionary3["anim"], duckDictionary3["width"], duckDictionary3["height"]);
    spriteSetXY(duckDictionary3["sprite"], duckDictionary3["xpos"], duckDictionary3["ypos"]);

    createSpriteInGroup(duckGroupName, duckDictionary4["sprite"], duckDictionary4["anim"], duckDictionary4["width"], duckDictionary4["height"]);
    spriteSetXY(duckDictionary4["sprite"], duckDictionary4["xpos"], duckDictionary4["ypos"]);

    createSpriteInGroup(duckGroupName, duckDictionary5["sprite"], duckDictionary5["anim"], duckDictionary5["width"], duckDictionary5["height"]);
    spriteSetXY(duckDictionary5["sprite"], duckDictionary5["xpos"], duckDictionary5["ypos"]);

    createSpriteInGroup(duckGroupName, duckDictionary6["sprite"], duckDictionary6["anim"], duckDictionary6["width"], duckDictionary6["height"]);
    spriteSetXY(duckDictionary6["sprite"], duckDictionary6["xpos"], duckDictionary6["ypos"]);

    createSpriteInGroup(duckGroupName, duckDictionary7["sprite"], duckDictionary7["anim"], duckDictionary7["width"], duckDictionary7["height"]);
    spriteSetXY(duckDictionary7["sprite"], duckDictionary7["xpos"], duckDictionary7["ypos"]);

    createSpriteInGroup(enemiesGroupName, ghostDictionary["sprite1"], ghostDictionary["animation"], ghostDictionary["width"], ghostDictionary["height"]);
    spriteSetXY(ghostDictionary["sprite1"], ghostDictionary["xpos1"], ghostDictionary["ypos1"]);

    createSpriteInGroup(enemiesGroupName, ghostDictionary["sprite2"], ghostDictionary["animation"], ghostDictionary["width"], ghostDictionary["height"]);
    spriteSetXY(ghostDictionary["sprite2"], ghostDictionary["xpos2"], ghostDictionary["ypos2"]);

    createSpriteInGroup(enemiesGroupName, ghostDictionary["sprite3"], ghostDictionary["animation"], ghostDictionary["width"], ghostDictionary["height"]);
    spriteSetXY(ghostDictionary["sprite3"], ghostDictionary["xpos3"], ghostDictionary["ypos3"]);

    createSpriteInGroup(collidingGroupName, platformDictionary["sprite"], platformDictionary["animation"], platformDictionary["width"], platformDictionary["height"]);
    spriteSetXY(platformDictionary["sprite"], platformDictionary["xpos"], platformDictionary["ypos"]);

    createSpriteInGroup(screenGroupName, startScreenDictionary["sprite"], startScreenDictionary["anim"], startScreenDictionary["width"], startScreenDictionary["height"]);

    createSpriteInGroup(screenGroupName, deadScreenDictionary["sprite"], deadScreenDictionary["anim"], deadScreenDictionary["width"], deadScreenDictionary["height"]);
    spriteSetXY(deadScreenDictionary["sprite"], deadScreenDictionary["xpos"], deadScreenDictionary["ypos"]);

    createSpriteInGroup(screenGroupName, endScreenDictionary["sprite"], endScreenDictionary["anim"], endScreenDictionary["width"], endScreenDictionary["height"]);
    spriteSetXY(endScreenDictionary["sprite"], endScreenDictionary["xpos"], endScreenDictionary["ypos"]);

}; // end of setup() function. Notice the braces match!
// there should only ever be ONE setup() function!!! 


var startScreenDictionary = {
    "sprite": "startScreen",
    "width": 640,
    "height": 480,
    "anim": newGQAnimation("img/StartScreen.png")
};

var deadScreenDictionary = {
    "sprite": "deadScreen",
    "anim": newGQAnimation("img/YouLoseScreen.png"),
    "width": 640,
    "height": 480,
    "xpos": 100000,
    "ypos": 100000
};

var endScreenDictionary = {
    "sprite": "endScreen",
    "anim": newGQAnimation("img/WinScreen.png"),
    "width": 640,
    "height": 480,
    "xpos": 1000000,
    "ypos": 1000000
};

var mainCharacterDictionary = {
    "xpos": 10000,
    "ypos": 10000,
    "xspeed": 4,
    "yspeed": 4,
    "sprite": "mainChracter",
    "standingAnimation": newGQAnimation("img/MainCharacterAnimation.png", 8, 67, 150, $.gQ.ANIMATION_HORIZONTAL),
    "movingAnimation": newGQAnimation("img/MovingMainCharacter.png", 5, 67, 240, $.gQ.ANIMATION_HORIZONTAL),
    "movingAnimation2": newGQAnimation("img/MovingMainCharacter (copy).png", 5, 67, 240, $.gQ.ANIMATION_HORIZONTAL),
    "jumpAnimation": newGQAnimation("img/JumpMainCharacter.png", 4, 67, 270, $.gQ.ANIMATION_HORIZONTAL),
    "hitAnimation": newGQAnimation("img/MainCharacterHitAnimation.png", 2, 67, 50, $.gQ.ANIMATION_HORIZONTAL),
    "height": 104,
    "width": 67,
    "animState": "still",
    "health": 1
};

var backgroundDictionary = {
    "sprite": "background1",
    "sprite2": "background2",
    "xpos2": 640,
    "xpos": 0,
    "ypos": 0,
    "xspeed": 0,
    "yspeed": 0,
    "width": 640,
    "height": 480,
    "animation": newGQAnimation("img/background.png")
};

var bulletDictionary = {
    "sprite": "bullet1",
    "sprite2": "bullet2",
    "xpos": 1000,
    "ypos": 1000,
    "xpos2": 1000,
    "ypos2": 1000,
    "xspeed": -30,
    "yspeed": -30,
    "width": 25,
    "height": 13,
    "animation": newGQAnimation("img/bullet.png"),
    "hit": false
};

var fishDictionary = {
    "sprite": "fish1",
    "xpos": -1000,
    "ypos": -1000,
    "xspeed": 4,
    "yspeed": 4,
    "width": 141,
    "height": 91,
    "animation": newGQAnimation("img/flyingfishanimation.png", 8, 141, 20, $.gQ.ANIMATION_HORIZONTAL),
    "health": 15

};

var duckDictionary = {
    "sprite": "duck1",
    "anim": newGQAnimation("img/duckanimation.png", 10, 35, 150, $.gQ.ANIMATION_HORIZONTAL),
    "xpos": 1 + (parseInt)(Math.random() * 640),
    "ypos": 10000,
    "width": 35,
    "height": 45,
    "yspeed": 5
};
var duckDictionary2 = {
    "sprite": "duck2",
    "anim": newGQAnimation("img/duckanimation.png", 10, 35, 150, $.gQ.ANIMATION_HORIZONTAL),
    "xpos": 1 + (parseInt)(Math.random() * 640),
    "ypos": 10000,
    "width": 35,
    "height": 45,
    "yspeed": 5
};
var duckDictionary3 = {
    "sprite": "duck3",
    "anim": newGQAnimation("img/duckanimation.png", 10, 35, 150, $.gQ.ANIMATION_HORIZONTAL),
    "xpos": 1 + (parseInt)(Math.random() * 640),
    "ypos": 10000,
    "width": 35,
    "height": 45,
    "yspeed": 5
};
var duckDictionary4 = {
    "sprite": "duck4",
    "anim": newGQAnimation("img/duckanimation.png", 10, 35, 150, $.gQ.ANIMATION_HORIZONTAL),
    "xpos": 1 + (parseInt)(Math.random() * 640),
    "ypos": 10000,
    "width": 35,
    "height": 45,
    "yspeed": 5
};
var duckDictionary5 = {
    "sprite": "duck5",
    "anim": newGQAnimation("img/duckanimation.png", 10, 35, 150, $.gQ.ANIMATION_HORIZONTAL),
    "xpos": 1 + (parseInt)(Math.random() * 640),
    "ypos": 10000,
    "width": 35,
    "height": 45,
    "yspeed": 5
};
var duckDictionary6 = {
    "sprite": "duck6",
    "anim": newGQAnimation("img/duckanimation.png", 10, 35, 150, $.gQ.ANIMATION_HORIZONTAL),
    "xpos": 1 + (parseInt)(Math.random() * 640),
    "ypos": 10000,
    "width": 35,
    "height": 45,
    "yspeed": 5
};
var duckDictionary7 = {
    "sprite": "duck7",
    "anim": newGQAnimation("img/duckanimation.png", 10, 35, 150, $.gQ.ANIMATION_HORIZONTAL),
    "xpos": 1 + (parseInt)(Math.random() * 640),
    "ypos": 10000,
    "width": 35,
    "height": 45,
    "yspeed": 5
};


var fruitDictionary = {
    "sprite": "fruit1",
    "xpos": -500,
    "ypos": -500,
    "xspeed": 10,
    "yspeed": 10,
    "width": 27,
    "height": 34,
    "animation": newGQAnimation("img/orangeapple.png")

};

var rhinoDictionary = {
    "xpos": -5000,
    "ypos": -5000,
    "xspeed": 10,
    "yspeed": 10,
    "width": 145,
    "height": 78,
    "sprite": "rhino1",
    "moving": newGQAnimation("img/rhinoanimation.png", 4, 145, 400, $.gQ.ANIMATION_HORIZONTAL),
    "animState": "still"

};

var cloudDictionary = {
    "xpos": 0,
    "ypos": 50,
    "xspeed": 7,
    "yspeed": 7,
    "width": 113,
    "height": 58,
    "sprite": "cloud1"
};

var ghostDictionary = {
    "xpos1": -500,
    "ypos1": -500,
    "xpos2": -500,
    "ypos2": -500,
    "xpos3": -500,
    "ypos3": -500,
    "xspeed": 7,
    "yspeed": 7,
    "width": 33,
    "height": 43,
    "sprite1": "ghost1",
    "sprite2": "ghost2",
    "sprite3": "ghost3",
    "animation": newGQAnimation("img/Ghost.png")

};


var bearDictionary = {
    "xpos": -500,
    "ypos": -402,
    "xspeed": 7,
    "yspeed": 7,
    "width": 52,
    "height": 78,
    "sprite": "bear1",
    "animation": newGQAnimation("img/bear.png")

};

var randomDictionary = {
    "powerUp": 1 + (parseInt)(Math.random() * 2),
    "heightRandom": 0,
    "widthRandom": 0
};


var platformDictionary = {
    "sprite": "platform",
    "width": 126,
    "height": 17,
    "xpos": 480,
    "ypos": 345,
    "xspeed": 5,
    "yspeed": 5,
    "animation": newGQAnimation("img/Platform.png")
};


var powerUpTimer;
var powerTimer = currentDate();
var sinceLastPowerUp = 0;

var randomMove = 1 + (parseInt)(Math.random() * 2);


var randomMoveTimer;
var sinceLastMove = 0;
var lastRandomMove = currentDate();





var randomMoves1 = function () {

    sinceLastMove = currentDate();

    randomMoveTimer = sinceLastMove - lastRandomMove;

    if (randomMove == 1 && randomMoveTimer > 5000) {
        lastRandomMove = lastRandomMove + randomMoveTimer;
        randomMove = 1 + (parseInt)(Math.random() * 2);



        ghostDictionary["xpos1"] = fishDictionary["xpos"];
        ghostDictionary["ypos1"] = fishDictionary["ypos"];

        ghostDictionary["xpos2"] = fishDictionary["xpos"];
        ghostDictionary["ypos2"] = fishDictionary["ypos"];

        ghostDictionary["xpos3"] = fishDictionary["xpos"];
        ghostDictionary["ypos3"] = fishDictionary["ypos"];




    }

    ghostDictionary["xpos1"] = ghostDictionary["xpos1"] - ghostDictionary["xspeed"];
    ghostDictionary["ypos1"] = ghostDictionary["ypos1"] - ghostDictionary["yspeed"];

    ghostDictionary["xpos2"] = ghostDictionary["xpos2"] - ghostDictionary["xspeed"];

    ghostDictionary["xpos3"] = ghostDictionary["xpos3"] - ghostDictionary["xspeed"];
    ghostDictionary["ypos3"] = ghostDictionary["ypos3"] + ghostDictionary["yspeed"];

    spriteSetXY(ghostDictionary["sprite1"], ghostDictionary["xpos1"], ghostDictionary["ypos1"]);

    spriteSetXY(ghostDictionary["sprite2"], ghostDictionary["xpos2"], ghostDictionary["ypos2"]);

    spriteSetXY(ghostDictionary["sprite3"], ghostDictionary["xpos3"], ghostDictionary["ypos3"]);

};

var randomMoves2 = function () {

    sinceLastMove = currentDate();

    randomMoveTimer = sinceLastMove - lastRandomMove;

    if (randomMove == 2 && randomMoveTimer > 5000) {
        lastRandomMove = lastRandomMove + randomMoveTimer;
        bearDictionary["xpos"] = PLAYGROUND_WIDTH;
        rhinoDictionary["xpos"] = PLAYGROUND_WIDTH;

        duckDictionary["ypos"] = 0 - duckDictionary["height"] - 240;
        duckDictionary2["ypos"] = 0 - duckDictionary2["height"] - 200;
        duckDictionary3["ypos"] = 0 - duckDictionary3["height"] - 160;
        duckDictionary4["ypos"] = 0 - duckDictionary4["height"] - 120;
        duckDictionary5["ypos"] = 0 - duckDictionary5["height"] - 80;
        duckDictionary6["ypos"] = 0 - duckDictionary6["height"] - 40;
        duckDictionary7["ypos"] = 0 - duckDictionary7["height"];
        randomMove = 1 + (parseInt)(Math.random() * 2);

    }
    duckDictionary["ypos"] = duckDictionary["ypos"] + duckDictionary["yspeed"];
    duckDictionary2["ypos"] = duckDictionary2["ypos"] + duckDictionary2["yspeed"];
    duckDictionary3["ypos"] = duckDictionary3["ypos"] + duckDictionary3["yspeed"];
    duckDictionary4["ypos"] = duckDictionary4["ypos"] + duckDictionary4["yspeed"];
    duckDictionary5["ypos"] = duckDictionary5["ypos"] + duckDictionary5["yspeed"];
    duckDictionary6["ypos"] = duckDictionary6["ypos"] + duckDictionary6["yspeed"];
    duckDictionary7["ypos"] = duckDictionary7["ypos"] + duckDictionary7["yspeed"];

    bearDictionary["xpos"] = bearDictionary["xpos"] - (bearDictionary["xspeed"] + 4);
    rhinoDictionary["xpos"] = rhinoDictionary["xpos"] - (rhinoDictionary["xspeed"] + 4);


    spriteSetX(bearDictionary["sprite"], bearDictionary["xpos"]);
    spriteSetY(bearDictionary["sprite"], 402);

    spriteSetX(rhinoDictionary["sprite"], rhinoDictionary["xpos"]);
    spriteSetY(rhinoDictionary["sprite"], 402);

    spriteSetY(duckDictionary["sprite"], duckDictionary["ypos"]);
    spriteSetX(duckDictionary["sprite"], 50);

    spriteSetY(duckDictionary2["sprite"], duckDictionary2["ypos"]);
    spriteSetX(duckDictionary2["sprite"], 100);

    spriteSetY(duckDictionary3["sprite"], duckDictionary3["ypos"]);
    spriteSetX(duckDictionary3["sprite"], 150);

    spriteSetY(duckDictionary3["sprite"], duckDictionary3["ypos"]);
    spriteSetX(duckDictionary3["sprite"], 200);

    spriteSetY(duckDictionary4["sprite"], duckDictionary4["ypos"]);
    spriteSetX(duckDictionary4["sprite"], 250);

    spriteSetY(duckDictionary5["sprite"], duckDictionary5["ypos"]);
    spriteSetX(duckDictionary5["sprite"], 300);

    spriteSetY(duckDictionary6["sprite"], duckDictionary6["ypos"]);
    spriteSetX(duckDictionary6["sprite"], 350);

    spriteSetY(duckDictionary7["sprite"], duckDictionary7["ypos"]);
    spriteSetX(duckDictionary7["sprite"], 400);



};



var powerUp = function () {

    sinceLastPowerUp = currentDate();

    powerUpTimer = sinceLastPowerUp - powerTimer;

    fruitDictionary["xpos"] = fruitDictionary["xpos"] - fruitDictionary["xspeed"];



    if (fruitDictionary["xpos"] < 0 - fruitDictionary["width"] && powerUpTimer >= 10000) {
        powerTimer = powerTimer + powerUpTimer;
        randomDictionary["heightRandom"] = 1 + (parseInt)(Math.random() * 480);
        fruitDictionary["xpos"] = PLAYGROUND_WIDTH;
        fruitDictionary["ypos"] = randomDictionary["heightRandom"];


    }



    spriteSetXY(fruitDictionary["sprite"], fruitDictionary["xpos"], fruitDictionary["ypos"]);
};


var backgroundMoving = function () {
    backgroundDictionary["xpos"] = backgroundDictionary["xpos"] - 5;
    backgroundDictionary["xpos2"] = backgroundDictionary["xpos2"] - 5;
    if (backgroundDictionary["xpos2"] < 0 - 635) {
        backgroundDictionary["xpos2"] = PLAYGROUND_WIDTH;
    }
    if (backgroundDictionary["xpos"] < 0 - 635) {
        backgroundDictionary["xpos"] = PLAYGROUND_WIDTH;
    }

    spriteSetX(backgroundDictionary["sprite"], backgroundDictionary["xpos"]);
    spriteSetX(backgroundDictionary["sprite2"], backgroundDictionary["xpos2"]);
};

var gameStart = currentDate();

var timer;

var bulletTimer = currentDate();

var sinceLastShot = 0;




var bulletShoot = function () {
    sinceLastShot = currentDate();

    timer = sinceLastShot - bulletTimer;




    if (getKeyState(88) && timer > 50 && bulletDictionary["xpos"] > PLAYGROUND_WIDTH + 40 && bulletDictionary["hit"] == false) {

        bulletTimer = bulletTimer + timer;
        bulletDictionary["xpos"] = mainCharacterDictionary["xpos"] + 20;
        bulletDictionary["ypos"] = mainCharacterDictionary["ypos"] + 57;
        bulletDictionary["hit"] = false;
    }
    bulletDictionary["xpos"] = bulletDictionary["xpos"] - bulletDictionary["xspeed"];


    spriteSetXY(bulletDictionary["sprite"], bulletDictionary["xpos"], bulletDictionary["ypos"]);
};

var jumpTimer = 0;
var jump = 0;
var sinceLastJump;

var mainHitTimer = 0;
var sinceLastSwitchAnim = 0;
var hit = currentDate();
var timerCheck = false;

var changeSpeedByKbdGravity = function (dictionary) {

    sinceLastSwitchAnim = currentDate();


    sinceLastJump = currentDate();

    jumpTimer = sinceLastJump - jump;

    if (getKeyState(65)) {
        dictionary["xpos"] = dictionary["xpos"] - 4;


    }




    if (getKeyState(68)) {
        dictionary["xpos"] = dictionary["xpos"] + 4;


    }

    if (dictionary["xpos"] < 0) {
        dictionary["xpos"] = 0;
        dictionary["xspeed"] = 0;
    }

    if (dictionary["xpos"] > PLAYGROUND_WIDTH - dictionary["width"]) {
        dictionary["xpos"] = PLAYGROUND_WIDTH - dictionary["width"];
    }






    if (getKeyState(87) && jumpTimer > 1100) {
        jump = jump + jumpTimer;
        dictionary["yspeed"] = dictionary["yspeed"] - 17;


    } else {
        dictionary["yspeed"] = dictionary["yspeed"] + 1;

    }

    dictionary["ypos"] = dictionary["ypos"] + dictionary["yspeed"];

    if (dictionary["ypos"] > PLAYGROUND_HEIGHT - dictionary["height"]) {
        dictionary["yspeed"] = -1 * dictionary["yspeed"] * 0;
        dictionary["ypos"] = PLAYGROUND_HEIGHT - dictionary["height"];
    }

    if (dictionary["ypos"] < 0) {
        dictionary["ypos"] = 0;
    }



    if (timerCheck == false) {

        if (getKeyState(65)) {
            if (dictionary["animState"] == "still") {
                spriteSetAnimation(dictionary["sprite"], dictionary["movingAnimation2"]);
                dictionary["animState"] = "movingLeft";

            }
        }

        if (getKeyState(68)) {
            if (dictionary["animState"] == "still") {
                spriteSetAnimation(dictionary["sprite"], dictionary["movingAnimation"]);
                dictionary["animState"] = "movingRight";

            }
        }

        if (getKeyState(87)) {

            if (dictionary["animState"] == "still") {
                spriteSetAnimation(dictionary["sprite"], dictionary["jumpAnimation"]);
                dictionary["animState"] = "jump";

            }
        }


        if (!getKeyState(65)) {
            if (dictionary["animState"] == "movingLeft") {
                spriteSetAnimation(dictionary["sprite"], dictionary["standingAnimation"]);
                dictionary["animState"] = "still";
            }
        }


        if (!getKeyState(68)) {
            if (dictionary["animState"] == "movingRight") {
                spriteSetAnimation(dictionary["sprite"], dictionary["standingAnimation"]);
                dictionary["animState"] = "still";
            }
        }


        if (!getKeyState(87) && jumpTimer > 1000) {
            if (dictionary["animState"] == "jump") {
                spriteSetAnimation(dictionary["sprite"], dictionary["standingAnimation"]);
                dictionary["animState"] = "still";
            }
        }

    }

    mainHitTimer = sinceLastSwitchAnim - hit;
    if (timerCheck == false) {
        if (dictionary["animState"] == "hit") {

            spriteSetAnimation(dictionary["sprite"], dictionary["hitAnimation"]);

            timerCheck = true;
        }
    }


    if (mainHitTimer > 5000) {
        if (dictionary["animState"] == "hit") {
            spriteSetAnimation[dictionary["sprite"], dictionary["standingAnimation"]];
            dictionary["animState"] = "still";
        }
        timerCheck = false;
        hit = hit + mainHitTimer;
    }








    spriteSetX(dictionary["sprite"], dictionary["xpos"]);
    spriteSetY(dictionary["sprite"], dictionary["ypos"]);


};


var bounceMovementSideToSide = function (dictionary) {




    dictionary["ypos"] = dictionary["ypos"] + dictionary["yspeed"];
    if (dictionary["ypos"] < -50) {
        dictionary["yspeed"] = -1 * dictionary["yspeed"];

    }
    if (dictionary["ypos"] > PLAYGROUND_HEIGHT - dictionary["height"]) {
        dictionary["yspeed"] = -1 * dictionary["yspeed"];
    }
    spriteSetY(dictionary["sprite"], dictionary["ypos"]);

    if (fishDictionary["health"] == 0) {
        spriteSetXY(fishDictionary["sprite"], -100000, -100000);
    }
};

var horizontalBounceMovement = function () {
    platformDictionary["xpos"] = platformDictionary["xpos"] - platformDictionary["xspeed"];
    if (platformDictionary["xpos"] < 0) {
        platformDictionary["xpos"] = 0;
        platformDictionary["xspeed"] = -1 * platformDictionary["xspeed"];
    }

    if (platformDictionary["xpos"] > PLAYGROUND_WIDTH - platformDictionary["width"]) {
        platformDictionary["xpos"] = PLAYGROUND_WIDTH - platformDictionary["width"];
        platformDictionary["xspeed"] = -1 * platformDictionary["xspeed"];
    }
    spriteSetX(platformDictionary["sprite"], platformDictionary["xpos"]);
};

var timer2;
var hitTimer = 0;
var sinceLastHit = 0;


var mainCharacterHit = function () {
    sinceLastHit = currentDate();

    timer2 = sinceLastHit - hitTimer;


    if (timer2 > 5000) {
        hitTimer = hitTimer + timer2;
        mainCharacterDictionary["animState"] = "hit";
        mainCharacterDictionary["health"] = mainCharacterDictionary["health"] - 1;
        if (mainCharacterDictionary["health"] >= 0) {
            hitSound.play();
        }
    }



};

var bulletHitFishCollision = function () {
    fishDictionary["health"] = fishDictionary["health"] - 1;
    bulletDictionary["xpos"] = 1000;

};

var mobsKilled = 0;

var bulletHitBear = function () {
    bearDictionary["xpos"] = -100000;
    bearDictionary["ypos"] = -100000;
    bulletDictionary["xpos"] = 1000;
    mobsKilled = mobsKilled + 1;
};

var bulletHitRhino = function () {
    rhinoDictionary["xpos"] = -100000;
    rhinoDictionary["ypos"] = -100000;
    bulletDictionary["xpos"] = 1000;
    mobsKilled = mobsKilled + 1;
};

var bulletHitDuck = function () {
    duckDictionary["xpos"] = 100000;
    duckDictionary["ypos"] = 100000;
    bulletDictionary["xpos"] = 1000;
    mobsKilled = mobsKilled + 1;
};
var bulletHitDuck2 = function () {
    duckDictionary2["xpos"] = 100000;
    duckDictionary2["ypos"] = 100000;
    bulletDictionary["xpos"] = 1000;
    mobsKilled = mobsKilled + 1;
};
var bulletHitDuck3 = function () {
    duckDictionary3["xpos"] = 100000;
    duckDictionary3["ypos"] = 100000;
    bulletDictionary["xpos"] = 1000;
    mobsKilled = mobsKilled + 1;
};
var bulletHitDuck4 = function () {
    duckDictionary4["xpos"] = 100000;
    duckDictionary4["ypos"] = 100000;
    bulletDictionary["xpos"] = 1000;
    mobsKilled = mobsKilled + 1;
};
var bulletHitDuck5 = function () {
    duckDictionary5["xpos"] = 100000;
    duckDictionary5["ypos"] = 100000;
    bulletDictionary["xpos"] = 1000;
    mobsKilled = mobsKilled + 1;
};
var bulletHitDuck6 = function () {
    duckDictionary6["xpos"] = 100000;
    duckDictionary6["ypos"] = 100000;
    bulletDictionary["xpos"] = 1000;
    mobsKilled = mobsKilled + 1;
};
var bulletHitDuck7 = function () {
    duckDictionary7["xpos"] = 100000;
    duckDictionary7["ypos"] = 100000;
    bulletDictionary["xpos"] = 1000;
    mobsKilled = mobsKilled + 1;
};



var mainCharacterHitByBoss = function () {
    forEachSpriteSpriteCollisionDo(mainCharacterDictionary["sprite"], fishDictionary["sprite"], mainCharacterHit);
};

var mainCharacterHitByMobs = function () {
    forEachSpriteGroupCollisionDo(mainCharacterDictionary["sprite"], "enemyGroup", mainCharacterHit);
};

var mainCharacterHitByDucks = function () {
    forEachSpriteGroupCollisionDo(mainCharacterDictionary["sprite"], "duckGroup", mainCharacterHit);
};

var mainCharacterHitByFruit = function () {
    forEachSpriteSpriteCollisionDo(mainCharacterDictionary["sprite"], fruitDictionary["sprite"], mainCharacterHit);
};



var collisionBetweenBulletsAndEnemies1 = function () {
    forEachSpriteSpriteCollisionDo(fishDictionary["sprite"], bulletDictionary["sprite"], bulletHitFishCollision);
};

var collisionBetweenBulletsAndEnemies2 = function () {
    forEachSpriteSpriteCollisionDo(bulletDictionary["sprite"], bearDictionary["sprite"], bulletHitBear);
};

var collisionBetweenBulletsAndEnemies3 = function () {
    forEachSpriteSpriteCollisionDo(bulletDictionary["sprite"], rhinoDictionary["sprite"], bulletHitRhino);
};

var collisionBetweenBulletsAndEnemies4 = function () {
    forEachSpriteSpriteCollisionDo(bulletDictionary["sprite"], duckDictionary["sprite"], bulletHitDuck);
    forEachSpriteSpriteCollisionDo(bulletDictionary["sprite"], duckDictionary2["sprite"], bulletHitDuck2);
    forEachSpriteSpriteCollisionDo(bulletDictionary["sprite"], duckDictionary3["sprite"], bulletHitDuck3);
    forEachSpriteSpriteCollisionDo(bulletDictionary["sprite"], duckDictionary4["sprite"], bulletHitDuck4);
    forEachSpriteSpriteCollisionDo(bulletDictionary["sprite"], duckDictionary5["sprite"], bulletHitDuck5);
    forEachSpriteSpriteCollisionDo(bulletDictionary["sprite"], duckDictionary6["sprite"], bulletHitDuck6);
    forEachSpriteSpriteCollisionDo(bulletDictionary["sprite"], duckDictionary7["sprite"], bulletHitDuck7);
};



var counter3 = 0;
var checksIfMainCharacterIsDead = function () {
    if (mainCharacterDictionary["health"] <= 0) {
        mainCharacterDictionary["xpos"] = 100000;
        mainCharacterDictionary["ypos"] = 100000;
        spriteSetXY(mainCharacterDictionary["sprite"], mainCharacterDictionary["xpos"], mainCharacterDictionary["ypos"]);
        deadScreenDictionary["xpos"] = 0;
        deadScreenDictionary["ypos"] = 0;
        spriteSetXY(deadScreenDictionary["sprite"], deadScreenDictionary["xpos"], deadScreenDictionary["ypos"]);
        mySound.stop();
        if (counter3 == 0) {
            loseSound.play();
            counter3 = counter3 + 1;
        }
    }


};

var platformCollision = function () {
    mainCharacterDictionary["yspeed"] = -1;
    spriteSetY(mainCharacterDictionary["sprite"], mainCharacterDictionary["ypos"]);
};

var stayOnPlatformCollision = function () {
    forEachSpriteSpriteCollisionDo(mainCharacterDictionary["sprite"], platformDictionary["sprite"], platformCollision);
};

var rhinoMovementLvl1 = function () {
    if (mobsKilled < 5) {

        rhinoDictionary["xpos"] = rhinoDictionary["xpos"] - rhinoDictionary["xspeed"];
        if (rhinoDictionary["xpos"] < 0 - rhinoDictionary["width"]) {
            rhinoDictionary["xpos"] = 3000;
        }
        spriteSetXY(rhinoDictionary["sprite"], rhinoDictionary["xpos"], 402);


    }
};

var bearMovementLvl1 = function () {
    if (mobsKilled < 5) {

        bearDictionary["xpos"] = bearDictionary["xpos"] - bearDictionary["xspeed"];
        if (bearDictionary["xpos"] < 0 - bearDictionary["width"]) {
            bearDictionary["xpos"] = 1500;
        }
        spriteSetXY(bearDictionary["sprite"], bearDictionary["xpos"], 402);
    }
};

var duckMovementLvl1 = function () {
    if (mobsKilled < 5) {

        duckDictionary["ypos"] = duckDictionary["ypos"] + duckDictionary["yspeed"];
        if (duckDictionary["ypos"] > PLAYGROUND_HEIGHT) {
            duckDictionary["ypos"] = -1000;
            duckDictionary["xpos"] = 1 + (parseInt)(Math.random() * 640);
        }
        spriteSetXY(duckDictionary["sprite"], duckDictionary["xpos"], duckDictionary["ypos"]);
    }
};
var startCounter = 0;
var startScreenCode = function () {

    if (getKeyState(13) && startCounter == 0) {
        mainCharacterDictionary["xpos"] = 0;
        spriteSetY(duckDictionary6["sprite"], duckDictionary6["ypos"]);
        spriteSetX(duckDictionary6["sprite"], 350);
        mainCharacterDictionary["ypos"] = PLAYGROUND_HEIGHT - mainCharacterDictionary["height"];
        spriteSetXY(mainCharacterDictionary["sprite"], mainCharacterDictionary["xpos"], mainCharacterDictionary["ypos"]);
        spriteSetXY(startScreenDictionary["sprite"], 100000000, 100000000);
        startCounter = startCounter + 1;
        mySound.play();
    }
    if (startCounter == 1 && fishDictionary["health"] > 0) {
        rhinoMovementLvl1();
        bearMovementLvl1();
        duckMovementLvl1();
        changeSpeedByKbdGravity(mainCharacterDictionary);

    }

};



var counter = 0;
var level2Function = function () {
    if (mobsKilled >= 5 && fishDictionary["health"] > 0) {
        if (counter == 0) {
            fishDictionary["xpos"] = 499;
            fishDictionary["ypos"] = 389;
            spriteSetXY(fishDictionary["sprite"], fishDictionary["xpos"], fishDictionary["ypos"]);
            counter = counter + 1;
            mainCharacterDictionary["health"] = mainCharacterDictionary["health"] + 1;
        }
        bounceMovementSideToSide(fishDictionary);
        randomMoves1();
        randomMoves2();
        sprite("text1").text(fishDictionary["health"]);
        spriteSetXY("text1", fishDictionary["xpos"] + 70, fishDictionary["ypos"]);


    }
};
var counter2 = 0;
var endGameScreen = function () {
    if (fishDictionary["health"] < 1) {
        if (counter2 == 0) {
            endingSound.play();
            counter2 = counter2 + 1;
            mySound.stop();
        }
        mainCharacterDictionary["xpos"] = 100000;
        mainCharacterDictionary["ypos"] = 100000;
        spriteSetXY(mainCharacterDictionary["sprite"], mainCharacterDictionary["xpos"], mainCharacterDictionary["ypos"]);
        endScreenDictionary["xpos"] = 0;
        endScreenDictionary["ypos"] = 0;
        spriteSetXY(endScreenDictionary["sprite"], endScreenDictionary["xpos"], endScreenDictionary["ypos"]);

    }
};

var draw = function () {


    startScreenCode();
    level2Function();
    endGameScreen();


    stayOnPlatformCollision();
    horizontalBounceMovement();
    powerUp();

    backgroundMoving();

    bulletShoot();

    bounceMovementSideToSide(fishDictionary);

    mainCharacterHitByBoss();
    mainCharacterHitByMobs();
    mainCharacterHitByDucks();
    mainCharacterHitByFruit();





    checksIfMainCharacterIsDead();



    collisionBetweenBulletsAndEnemies1();
    collisionBetweenBulletsAndEnemies2();
    collisionBetweenBulletsAndEnemies3();
    collisionBetweenBulletsAndEnemies4();

    sprite("healthText").text("You have " + mainCharacterDictionary["health"] + " health remaining");



    // there's a spriteGetY too, by the way
    // there's a spriteGetHeight too, also a spriteSetWidth and spriteSetHeight
    // there's a spriteSetY too
}; // end of draw() function. Notice the braces match!
// there should only ever be ONE draw() function!!!
