#!/usr/bin/env python

# File: ch4ex2.py
# Change the speeds on the robot motors

import barobo

ctx = barobo.BaroboCtx()
ctx.autoConnect()
linkbot = ctx.getLinkbot()

originalSpeeds = linkbot.getJointSpeeds()

speed=30
linkbot.setJointSpeeds(speed, speed, speed)
# Move all joints by 90 degrees in the positive direction
linkbot.move(90, 90, 90)
# Now move only joint 1 90 degrees in the negative direction
linkbot.move(-90, 0, 0)

linkbot.setJointSpeeds(*originalSpeeds)

