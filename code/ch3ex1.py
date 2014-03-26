#!/usr/bin/env python

# File: ch3ex1.py
# Move the motors on the robot

import barobo

ctx = barobo.BaroboCtx()
ctx.autoConnect()
linkbot = ctx.getLinkbot()

# Move all joints by 90 degrees in the positive direction
linkbot.move(90, 90, 90)
# Now move only joint 1 90 degrees in the negative direction
linkbot.move(-90, 0, 0)
