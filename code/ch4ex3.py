#!/usr/bin/env python

# File: ch4ex3.py
# Use some functions to make the robot do some interesting things.

import barobo
import time

def moveForward(l, angle):
    l.move(angle, 0, -angle)

def turnLeft(l, angle):
    l.move(-angle, 0, angle)

def blink(l):
    for i in range(3):
        linkbot.setLEDColor(255, 0, 0)
        time.sleep(0.5)
        linkbot.setLEDColor(0, 0, 255)
        time.sleep(0.5)

ctx = barobo.BaroboCtx()
ctx.autoConnect()
linkbot = ctx.getLinkbot()

blink(linkbot)
moveForward(linkbot, 180)
blink(linkbot)
turnLeft(linkbot, 90)


