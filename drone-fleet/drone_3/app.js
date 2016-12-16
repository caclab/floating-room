var df = require('dateformat')
  , autonomy = require('ardrone-autonomy')
  , mission  = autonomy.createMission()
  , arDrone = require('ar-drone')
  , arDroneConstants = require('ar-drone/lib/constants') 
  ;


function navdata_option_mask(c) {
  return 1 << c;
}

// From the SDK.
var navdata_options = (
    navdata_option_mask(arDroneConstants.options.DEMO)
  | navdata_option_mask(arDroneConstants.options.VISION_DETECT)
  | navdata_option_mask(arDroneConstants.options.MAGNETO)
  | navdata_option_mask(arDroneConstants.options.WIFI)
);

// Connect and configure the drone
mission.client().config('general:navdata_demo', true);
mission.client().config('general:navdata_options', navdata_options);
mission.client().config('video:video_channel', 1);
mission.client().config('detect:detect_type', 12);
//mission.client().config('control:flight_outdoor', true);
mission.client().config('control:flight_without_shell', false);
mission.client().config('control:flying_mode', 1);
//mission.client().config('control:euler_angle_max', 0.05);
mission.client().config('control:altitude_max', 2200);

// mission.log("mission-" + df(new Date(), "yyyy-mm-dd_hh-MM-ss") + ".txt");

//mission.zero();
mission.takeoff()
       .go({x:0, y:0, z:1.6})
       //.altitude(1.2)
       .hover(process.argv[2])
       .land();

mission.run(function (err, result) {
    if (err) {
        console.trace("Oops, something bad happened: %s", err.message);
        mission.client().stop();
        mission.client().land();
    } else {
        console.log("We are done!");
        process.exit(0);
    }
});