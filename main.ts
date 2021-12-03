namespace SpriteKind {
    export const package = SpriteKind.create()
    export const button = SpriteKind.create()
    export const errorBin = SpriteKind.create()
    export const cheerioBin = SpriteKind.create()
    export const upBin = SpriteKind.create()
    export const downBin = SpriteKind.create()
    export const sideBin = SpriteKind.create()
    export const unknownBin = SpriteKind.create()
}
/**
 * Create and place game map and objects
 */
// Pause the game, click reset to restart the game and bring back the box
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    pause2 = !(pause2)
    if (true) {
        box.setVelocity(0, 0)
        box.setFlag(SpriteFlag.Ghost, true)
        box.setFlag(SpriteFlag.Invisible, true)
    } else {
        box.setFlag(SpriteFlag.Ghost, false)
        box.setFlag(SpriteFlag.Invisible, false)
        resetBox()
    }
    scene.cameraFollowSprite(monkey)
})
// Reset to initial conditions with new box and parameters for type and dimensions
function resetBox () {
    _type = randint(0, 2)
    if (_type == 0) {
        boxLength = 10
        boxWidth = 10
        boxHeight = 30
        objectMaterial = "Rubber"
        objectWeight = 1
    } else if (_type == 1) {
        boxLength = 20
        boxWidth = 20
        boxHeight = 20
        orientation = randint(0, 1)
        objectMaterial = "Porcelain"
        objectWeight = 0.2
    } else {
        boxLength = randint(10, 20)
        boxWidth = randint(10, 20)
        boxHeight = randint(10, 30)
        objectMaterial = "Unknown"
        objectWeight = randint(0, 2)
    }
    console.log(_type)
    pinkButton.setFlag(SpriteFlag.Ghost, false)
    blueButton.setFlag(SpriteFlag.Ghost, false)
    box.setFlag(SpriteFlag.Invisible, true)
    pause(500)
    tiles.placeOnTile(box, tiles.getTileLocation(0, 7))
    box.setFlag(SpriteFlag.Invisible, false)
    pause(200)
    box.setVelocity(30, 0)
}
let orientation = 0
let objectWeight = 0
let objectMaterial = ""
let boxHeight = 0
let boxWidth = 0
let boxLength = 0
let _type = 0
let pinkButton: Sprite = null
let blueButton: Sprite = null
let box: Sprite = null
let monkey: Sprite = null
let pause2 = false
tiles.setTilemap(tilemap`level1`)
pause2 = false
monkey = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ............fffff...............
    ...........feeeeef..............
    ..........fddddeeef.............
    .........cdfddfdeeff............
    .........cdfddfdeeddf...........
    ........cdeeddddeebdc...........
    ........cddddcddeebdc...........
    ........cccccddeeefc............
    .........fddddeeeff.............
    ..........fffffeeeef............
    ............ffeeeeeef.ff........
    ...........feefeefeef.ef........
    ..........feefeefeeef.ef........
    .........fbdfdbfbbfeffef........
    .........fddfddfddbeffff........
    ..........fffffffffffff.........
    `, SpriteKind.Player)
monkey.setFlag(SpriteFlag.ShowPhysics, true)
scene.cameraFollowSprite(monkey)
controller.moveSprite(monkey, 100, 100)
tiles.placeOnTile(monkey, tiles.getTileLocation(5, 7))
box = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f f e e e f f f f f f f f f f f 
    f f f e e e f f e f e e f e e f 
    f e f f e e e f f f e e f e e f 
    f e e f f e e e f f e e f e e f 
    f e e f f f e e e f f e f e e f 
    f e e f e f f e e e f f f e e f 
    f e e f e e f f e e e f f e e f 
    f e e f e e f f f e e e f f e f 
    f e e f e e f e f f e e e f f f 
    f f f f f f f f f f f e e e f f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.package)
blueButton = sprites.create(img`
    . . . . . . . . . . . . . . . 1 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.button)
tiles.placeOnTile(blueButton, tiles.getTileLocation(10, 7))
pinkButton = sprites.create(img`
    . . . . . . . . . . . . . . . 1 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.button)
tiles.placeOnTile(pinkButton, tiles.getTileLocation(4, 7))
let pinkbutton1 = sprites.create(img`
    . . . . . . . . . . . . . . . 1 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.button)
tiles.placeOnTile(pinkbutton1, tiles.getTileLocation(6, 7))
let sideOrientation = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 2 2 2 2 2 . 2 2 2 2 2 2 . 
    . . 2 . . . . . . 2 . . . . 2 . 
    . . 2 . . . . . . 2 . . . . 2 . 
    . . 2 . . . . . . 2 . . . . 2 . 
    . . 2 . . . . . . 2 . . . . 2 . 
    . . 2 2 2 2 2 2 . 2 . . . . 2 . 
    . . . . . . . 2 . 2 . . . . 2 . 
    . . . . . . . 2 . 2 . . . . 2 . 
    . . . . . . . 2 . 2 . . . . 2 . 
    . . . . . . . 2 . 2 . . . . 2 . 
    . . . . . . . 2 . 2 . . . . 2 . 
    . . 2 2 2 2 2 2 . 2 2 2 2 2 2 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.sideBin)
tiles.placeOnTile(sideOrientation, tiles.getTileLocation(4, 9))
let upOrientation = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 2 . . . . 2 . 2 2 2 2 2 2 . . 
    . 2 . . . . 2 . 2 . . . . 2 . . 
    . 2 . . . . 2 . 2 . . . . 2 . . 
    . 2 . . . . 2 . 2 . . . . 2 . . 
    . 2 . . . . 2 . 2 2 2 2 2 2 . . 
    . 2 . . . . 2 . 2 . . . . . . . 
    . 2 . . . . 2 . 2 . . . . . . . 
    . 2 . . . . 2 . 2 . . . . . . . 
    . 2 2 2 2 2 2 . 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.upBin)
tiles.placeOnTile(upOrientation, tiles.getTileLocation(6, 9))
let unknown = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 3 . . . . 3 . . . . 3 . . . 
    . . 3 3 . . . 3 . . . 3 3 . . . 
    . . 3 3 3 . . 3 . . . 3 3 . . . 
    . . 3 . 3 . . 3 . . . 3 . 3 . . 
    . . 3 . 3 3 . 3 . . 3 . . 3 . . 
    . . 3 . . 3 . 3 . . 3 3 3 3 3 . 
    . . 3 . . 3 3 3 . . 3 . . . 3 3 
    . . 3 . . . 3 3 . 3 3 . . . . 3 
    . . 3 . . . 3 3 . 3 . . . . . 3 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.unknownBin)
tiles.placeOnTile(unknown, tiles.getTileLocation(12, 7))
let cheerio = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . 3 . . . . . . . . . . . . 
    . . . 3 . . . . . . . . . . . . 
    . . . 3 . . . . . . . . . . . . 
    . . . 3 . . . . . . . . . . . . 
    . . . 3 . . . . . . . . . . . . 
    . . . 3 . . . . . . . . . . . . 
    . . . 3 . . . . . . . . . . . . 
    . . . 3 . . . . . . . . . . . . 
    . . . 3 . . . . . . . . . . . . 
    . . . 3 . . . . . . . . . . . . 
    . . . 3 . . . . . . . . . . . . 
    . . . 3 . . . . . . . . . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.cheerioBin)
tiles.placeOnTile(cheerio, tiles.getTileLocation(10, 9))
let Real_pink_button = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 3 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.button)
tiles.placeOnTile(Real_pink_button, tiles.getTileLocation(2, 7))
let Real_blue_button = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 8 . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.button)
tiles.placeOnTile(Real_blue_button, tiles.getTileLocation(8, 7))
resetBox()
forever(function () {
	
})
forever(function () {
    if (Real_blue_button.overlapsWith(box)) {
        pause(500)
        box.setVelocity(0, 0)
        story.printText("Scanning...", 135, 88, 15, 1, story.TextSpeed.Slow)
        game.showLongText("Weight: " + convertToText(objectWeight) + "                         " + ("Width: " + convertToText(boxWidth)) + "                        " + ("Length: " + convertToText(convertToText(boxLength))) + "                         " + ("Height: " + convertToText(boxHeight)), DialogLayout.Center)
        pause(1000)
        box.setVelocity(30, 0)
        pause(5000)
    }
})
// Code for the text of the first scanning
forever(function () {
    if (Real_pink_button.overlapsWith(box)) {
        pause(500)
        box.setVelocity(0, 0)
        story.printText("Scanning...", 36, 88, 15, 1, story.TextSpeed.Slow)
        if (orientation == 0) {
            game.showLongText("Orientation: " + "Side    " + "                         " + ("Material: " + convertToText(objectMaterial) + ""), DialogLayout.Center)
        } else {
            game.showLongText("Orientation: " + "Upright" + "                         " + ("Material: " + convertToText(objectMaterial) + ""), DialogLayout.Center)
        }
        pause(1000)
        box.setVelocity(30, 0)
        pause(3000)
    }
})
forever(function () {
    if (_type == 0) {
        if (box.overlapsWith(blueButton)) {
            tiles.placeOnTile(box, tiles.getTileLocation(10, 7))
            box.setVelocity(0, 30)
            pause(1000)
            box.setVelocity(0, 0)
        }
    } else if (_type == 1 && orientation == 0) {
        if (box.overlapsWith(pinkButton)) {
            tiles.placeOnTile(box, tiles.getTileLocation(4, 7))
            box.setVelocity(0, 30)
            pause(1000)
            box.setVelocity(0, 0)
        }
    } else if (_type == 1 && orientation == 1) {
        if (box.overlapsWith(pinkbutton1)) {
            tiles.placeOnTile(box, tiles.getTileLocation(6, 7))
            box.setVelocity(0, 30)
            pause(1000)
            box.setVelocity(0, 0)
        } else {
        	
        }
    }
})
forever(function () {
    if (box.overlapsWith(sideOrientation) || box.overlapsWith(cheerio) || (box.overlapsWith(upOrientation) || box.overlapsWith(unknown))) {
        box.setFlag(SpriteFlag.Invisible, true)
        if (box.overlapsWith(sideOrientation)) {
            story.printText("Side Goat Figurine!", 74, 168, 15, 1, story.TextSpeed.Fast)
        } else if (box.overlapsWith(upOrientation)) {
            story.printText("Upright Goat Figurine!", 104, 178, 15, 1, story.TextSpeed.Fast)
        } else if (box.overlapsWith(cheerio)) {
            story.printText("Cheerios!", 160, 168, 15, 1, story.TextSpeed.Fast)
        } else if (box.overlapsWith(unknown)) {
            story.printText("Unknown!", 195, 100, 15, 1, story.TextSpeed.Fast)
        } else {
        	
        }
        resetBox()
        pause(200)
    }
})
