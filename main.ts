radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    if (receivedNumber == 1) {
        radio.sendValue("temp", input.temperature())
    } else {
        radio.sendValue("lys", input.lightLevel())
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendNumber(2)
})
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    if (name == "temp") {
        basic.showString("Temperaturen er" + ("" + value) + "grader.")
    } else if (name == "lys") {
        if (value < 55) {
            basic.showString("Det er mørkt")
        } else if (value > 55) {
            basic.showString("Det er lyst")
        }
        
    }
    
})
radio.setTransmitPower(7)
radio.setGroup(1)
