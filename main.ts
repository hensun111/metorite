function hero () {
    Hero_spyder = sprites.create(img`
. . 2 . . . . . . . . 2 2 . . . 
. . . 2 2 . . . . . 2 . . . . . 
. . . 2 2 2 2 2 2 2 . . . . . . 
2 2 . 2 2 2 2 2 2 2 2 2 . 2 . . 
. 2 2 2 1 1 1 f 1 1 1 2 . 2 . . 
. . . 2 1 1 1 f 1 1 1 2 2 . . . 
. . 2 2 1 f 1 f 1 f 1 2 2 . . . 
. 2 2 2 1 f 1 f 1 f 1 2 . 2 2 . 
2 2 2 2 1 1 1 f 1 1 1 2 2 2 . . 
2 . 2 2 1 1 1 f 1 1 1 2 . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . 2 2 . . 2 . . 2 . . . . . . 
. . 2 2 . . 2 . . 2 2 . . . . . 
. . . 2 . . . 2 . . . 2 . . . . 
. . . 2 . . . 2 . . . . 2 2 2 . 
. . . . . . . 2 . . . . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(Hero_spyder)
    Hero_spyder.setPosition(72, 89)
}
function cloud () {
    clout = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 1 1 1 1 1 1 1 1 1 . . . . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . . . . . . . . . . . . . . . 
. . 5 . . . 5 . . 5 . . . 5 . . 
. 5 5 . . . 5 . . 5 5 . . 5 5 . 
. 5 . . . . 5 . . . 5 5 . . 5 . 
`, 50, 0)
    clout.y += 3
    clout.x += Math.randomRange(0, 10)
}
function score () {
    info.changeScoreBy(1)
}
function spyder_web () {
    web = sprites.create(img`
. . . . . . . 1 1 . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . 1 1 . . . . . . . . 
. . . . . . . 1 1 1 . . . . . . 
. . . . . . . . . 1 1 1 . . . . 
. . . . . . . . . . . 1 . . . . 
. . . . . . . . . . . 1 1 . . . 
. . . . . . . . . . . . 1 . . . 
. . . . . . . . . . . . 1 . . . 
. . . . . . . . . . . 1 . . . . 
. . . . . . . . . 1 1 1 . . . . 
. . . . . . . . 1 1 . . . . . . 
. . . . . . . 1 1 . . . . . . . 
`, SpriteKind.Projectile)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    web = sprites.createProjectileFromSprite(img`
. . . . . . . 1 1 . . . . . . . 
. . . . . . 1 1 . . . . . . . . 
. . . . . 1 1 . . . . . . . . . 
. . . . . 1 . . . . . . . . . . 
. . . . . 1 1 . . . . . . . . . 
. . . . . . 1 . . . . . . . . . 
. . . . . . . 1 1 . . . . . . . 
. . . . . . . . 1 1 . . . . . . 
. . . . . . . . . 1 1 . . . . . 
. . . . . . . . . . 1 . . . . . 
. . . . . . . . . . 1 . . . . . 
. . . . . . . . . 1 . . . . . . 
. . . . . . . . 1 1 . . . . . . 
. . . . . . . 1 1 . . . . . . . 
. . . . . . 1 1 . . . . . . . . 
. . . . . . 1 . . . . . . . . . 
`, Hero_spyder, 0, -100)
})
function rain () {
    rainn = sprites.create(img`
. . . . . . . . 8 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 8 . 3 . . 
. . . . 8 8 1 8 8 1 8 8 8 . . . 
. . . 8 8 1 8 8 1 8 8 8 8 8 . . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . 8 1 8 8 8 8 8 8 8 1 1 8 8 . 
. . 8 1 8 8 8 8 1 8 8 8 8 8 8 . 
. . 8 1 8 8 8 1 8 8 1 8 8 8 8 . 
. . 8 8 8 8 8 8 8 8 8 1 8 8 8 . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . . 8 8 8 1 1 8 8 8 8 8 8 . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
    rainn.setKind(SpriteKind.Projectile)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let rainn: Sprite = null
let web: Sprite = null
let clout: Sprite = null
let Hero_spyder: Sprite = null
hero()
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . 8 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . 8 8 8 8 8 . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . 8 8 1 8 8 1 8 8 8 . . . 
. . . 8 8 1 8 8 1 8 8 8 8 8 . . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . 8 1 8 8 8 8 8 8 8 1 1 8 8 . 
. . 8 1 8 8 8 8 1 8 8 8 8 8 8 . 
. . 8 1 8 8 8 1 8 8 1 8 8 8 8 . 
. . 8 8 8 8 8 8 8 8 8 1 8 8 8 . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . . 8 8 8 1 1 8 8 8 8 8 8 . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . . . . . . . . . . . . 
`, clout, 50, 100)
    cloud()
})
game.onUpdateInterval(1000, function () {
    score()
})
