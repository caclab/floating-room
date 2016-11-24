import os
import time
import random

#SSID: ardrone2_027621 / IP: 192.168.1.40
drone_4 = 'node drone_4/app.js 20000'

#SSID: ardrone2_057587 / IP: 192.168.1.20
drone_2 = 'node drone_2/app.js 20000'

#SSID: ardrone2_000724 / IP: 192.168.1.30
drone_3 = 'node drone_3/app.js 20000'

os.system(drone_3)
time.sleep(random.randint(0,20))
os.system(drone_4)
time.sleep(random.randint(0,20))
os.system(drone_2)

print "DONE!"