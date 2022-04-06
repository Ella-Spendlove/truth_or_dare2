input.onButtonPressed(Button.A, function () {
    i = randint(0, 1)
    if (i == 0) {
        basic.clearScreen()
        basic.showString("Truth")
    } else {
        basic.clearScreen()
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    arrow = randint(0, 3)
    if (arrow == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (arrow == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (arrow == 2) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    }
})
let arrow = 0
let i = 0
basic.showString("Truth or Dare?")
basic.forever(function () {
	
})
