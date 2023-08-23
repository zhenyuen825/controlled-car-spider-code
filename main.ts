radio.onReceivedString(function (receivedString) {
    item = receivedString
    if (item.compare("A") == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -200,
        SuperBit.enMotors.M3,
        -200
        )
    } else if (item.compare("B") == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        200,
        SuperBit.enMotors.M3,
        200
        )
    } else if (item.compare("C") == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        200,
        SuperBit.enMotors.M3,
        -200
        )
    } else if (item.compare("D") == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -200,
        SuperBit.enMotors.M3,
        200
        )
    } else if (item.compare("0") == 0) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        0
        )
    } else if (item.compare("E") == 0) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        SuperBit.RGB_Program().show()
    } else if (item.compare("F") == 0) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Green))
        SuperBit.RGB_Program().show()
    } else if (item.compare("G") == 0) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
        SuperBit.RGB_Program().show()
    } else if (item.compare("H") == 0) {
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
        SuperBit.RGB_Program().show()
    } else if (item.compare("H") == 0) {
        SuperBit.RGB_Program().show()
        SuperBit.RGB_Program().clear()
    }
})
let item = ""
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . # . # .
    `)
