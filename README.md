# Learning how to use socket.io
## Overview
I used this project to practice several tasks.
* Use a Material Design Lite (MDL) template
* Integrate MDL into Express with Handlebars
* Test web sockets using socket.io
* Insert a graph into a web page
* Using a slider to control gauge over websocket
## Raspberry PI
This test runs on a Raspberry PI that has a 320x480 touchscreen
The script `chromium_startup.sh` starts chrome in full screen kiosk mode. The `unclutter` command hides the mouse.
## Usage
The "display" should connect to http://<url>:3000
The "controller" connects to http://<url>:3000/admin
