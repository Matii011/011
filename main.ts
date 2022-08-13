input.onButtonPressed(Button.A, function () {
    tronco_superior_dinosaurio.change(LedSpriteProperty.Y, -1)
    tronco_inferior_dinosaurio.change(LedSpriteProperty.Y, -1)
    basic.pause(1000)
    tronco_superior_dinosaurio.change(LedSpriteProperty.Y, 1)
    tronco_inferior_dinosaurio.change(LedSpriteProperty.Y, 1)
})
function piedrita () {
    piedra = game.createSprite(4, 4)
    for (let index = 0; index < 4; index++) {
        basic.pause(1000)
        piedra.change(LedSpriteProperty.X, -1)
        if (piedra.isTouching(tronco_inferior_dinosaurio)) {
            basic.showIcon(IconNames.Sad)
            music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
            piedrita()
        }
    }
}
let piedra: game.LedSprite = null
let tronco_superior_dinosaurio: game.LedSprite = null
let tronco_inferior_dinosaurio: game.LedSprite = null
tronco_inferior_dinosaurio = game.createSprite(0, 4)
tronco_superior_dinosaurio = game.createSprite(0, 3)
piedrita()
basic.forever(function () {
    if (piedra.isTouchingEdge()) {
        basic.pause(1000)
        piedra.delete()
        piedrita()
    }
})
