/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mark lutabi
 * Created on: Sep 2024
 * This program turns LED on and off with switch
*/


basic.clearScreen()
pins.digitalWritePin(DigitalPin.P16, 0 )
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
pins.digitalWritePin(DigitalPin.P16,1)
basic.showIcon(IconNames.Yes)
})

input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.showIcon(IconNames.No)
})