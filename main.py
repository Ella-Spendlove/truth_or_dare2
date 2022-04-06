def on_button_pressed_a():
    global i
    i = randint(0, 1)
    if True:
        pass
    elif arrow == 0:
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global arrow
    arrow = randint(0, 4)
    if arrow == 0:
        pass
    elif arrow == 1:
        pass
    elif arrow == 2:
        pass
    else:
        pass
input.on_button_pressed(Button.B, on_button_pressed_b)

arrow = 0
i = 0
basic.show_string("Truth or Dare?")

def on_forever():
    pass
basic.forever(on_forever)
