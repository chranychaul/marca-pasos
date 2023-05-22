input.onButtonPressed(Button.A, function () {
    basic.showNumber(aceptar)
})
input.onGesture(Gesture.Shake, function () {
    if (input.acceleration(Dimension.Strength) > 750) {
        aceptar += 1
    }
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
