#!/usr/bin/env python

# File: move.py
# Move both joints of a Linkbot-I 90 degrees.

from barobo import Linkbot

linkbot = Linkbot()
linkbot.connect()

print ("Moving both joints 90 degrees...")
linkbot.move(90, 0, 90)
