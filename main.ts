input.onButtonPressed(Button.A, function () {
    basic.showNumber(aceptar)
    aceptar = 0
})
input.onGesture(Gesture.Shake, function () {
    aceptar += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showNumber(77 * aceptar)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    aceptar = 0
})
let aceptar = 0
aceptar = 0
