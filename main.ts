let noise = 0
led.enable(false)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
OLED.init(128, 64)
pins.servoWritePin(AnalogPin.P8, 180)
let open = false
basic.forever(function () {
    noise = smarthome.ReadNoise(AnalogPin.P1)
    if (noise > 70) {
        OLED.clear()
        OLED.writeString("der er nogen udenfor")
        basic.pause(1000)
    }
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        open = !(false)
        if (open == true) {
            pins.servoWritePin(AnalogPin.P8, 0)
            basic.pause(3000)
        }
    } else {
        pins.servoWritePin(AnalogPin.P8, 180)
        OLED.clear()
        OLED.writeString("fri bane")
        basic.pause(1000)
    }
})
