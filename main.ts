input.onGesture(Gesture.LogoUp, function () {
    if (input.acceleration(Dimension.Y) > 50) {
        aceptar += 1
        basic.pause(200)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(aceptar)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showNumber(0.77 * aceptar)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    aceptar = 0
})
let aceptar = 0
aceptar = 0
