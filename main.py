def on_received_number(receivedNumber):
    if receivedNumber == 1:
        radio.send_value("temp", input.temperature())
    else:
        radio.send_value("lys", input.light_level())
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    radio.send_number(1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    radio.send_number(2)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_received_value(name, value):
    if name == "temp":
        basic.show_string("Temperaturen er" + str(value) + "grader.")
    elif name == "lys":
        if value < 55:
            basic.show_string("Det er mørkt")
        elif value > 55:
            basic.show_string("Det er lyst")
radio.on_received_value(on_received_value)

radio.set_transmit_power(7)
radio.set_group(1)