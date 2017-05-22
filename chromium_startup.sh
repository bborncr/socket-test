#! /bin/bash

# Run on Display 0
export DISPLAY=:0

# Hide mouse
/usr/bin/unclutter -idle 1 &

# Start Chromium
/usr/bin/chromium-browser --window-size=320,480 --kiosk 192.168.86.43:3000

