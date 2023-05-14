input.onButtonPressed(Button.A, function () {
    turtle.pen(TurtlePenMode.Down)
})
function do_a_poo () {
	
}
input.onButtonPressed(Button.B, function () {
    turtle.pen(TurtlePenMode.Up)
})
let newheading = 0
serial.redirectToUSB()
let heading = 0
turtle.setBrightness(12)
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < -30) {
        newheading = 0
    } else if (input.rotation(Rotation.Roll) > 30) {
        newheading = 1
    } else if (input.rotation(Rotation.Pitch) > 30) {
        newheading = 2
    } else if (input.rotation(Rotation.Roll) < -30) {
        newheading = 3
    }
    while (heading != newheading) {
        turtle.turnRight()
        heading = (heading + 1) % 4
    }
    if (Math.abs(input.rotation(Rotation.Pitch)) > 30 || Math.abs(input.rotation(Rotation.Roll)) > 30) {
        turtle.forward(1)
        basic.pause(200)
    }
})
