#!/usr/bin/env python

# File: ch3ex1.py
# Modify the LED color on the Linkbot

import barobo

ctx = barobo.BaroboCtx()
ctx.autoConnect()
linkbot = ctx.getLinkbot()

linkbot.setLEDColor(255, 0, 0)
