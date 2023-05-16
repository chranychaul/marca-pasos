input.onButtonPressed(Button.A, function () {
    aceptar = 0
})
input.onGesture(Gesture.Shake, function () {
    aceptar += 1
})
let aceptar = 0
aceptar = 0
basic.forever(function () {
    basic.showNumber(aceptar)
})
