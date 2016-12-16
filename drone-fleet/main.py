'''
Master control for the installation floating-room from Samuel Adam Swope
Author: fito_segrera

Drones' IDs and Paths to scripts:

#SSID: ardrone2_047073 / IP: 192.168.1.10 // Trash
#drone_1 = 'drone_1/app.js'

#SSID: ardrone2_057587 / IP: 192.168.1.20 // Lamp
#drone_2 = 'drone_2/app.js'

#SSID: ardrone2_000724 / IP: 192.168.1.30 // Box
#drone_3 = 'drone_3/app.js'

#SSID: ardrone2_027621 / IP: 192.168.1.40 // Clock
#drone_4 = 'drone_4/app.js'

#SSID: ardrone2_256813 / IP: 192.168.1.50 // Mirror
#drone_5 = 'drone_5/app.js'

'''

import os
import time
import random
import threading
import Image

drones = [
	'drone_1/app.js',
	'drone_2/app.js',
	'drone_3/app.js',
	'drone_4/app.js',
	'drone_5/app.js'
]

loop = 0
totalRuns = 10

def startDrone(dr):
	print dr, "flying for", str(t)
	os.system('nodejs ' + dr + ' ' + str(t))
	print "------------"

def stopDrone(dr):
	print "stopping drone", dr
	os.system('pkill -f ' + dr)
	print dr, "killed!"

while loop < totalRuns:

	#give the performer time to get out of the room
	if loop == 0:
		time.sleep(60)

	for drone in drones:
		t = random.randint(15,30) * 1000
		timerThread = threading.Timer((t/1000)*3, stopDrone, args=(drone,))
		timerThread.start()
		startDrone(drone)
		time.sleep(t/1000 + 5)

	print "LOOP", str(loop+1), "DONE!"
	loop += 1

im = Image.open("color.jpg")
print im.format, im.size, im.mode
im.show()