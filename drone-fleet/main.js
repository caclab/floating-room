var exec = require('child_process').exec;

//SSID: ardrone2_057587 / IP: 192.168.1.20
exec('node drone_2/app.js', function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});

//SSID: ardrone2_000724 / IP: 192.168.1.30
exec('node drone_3/app.js', function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});

//SSID: ardrone2_027621 / IP: 192.168.1.40
exec('node drone_4/app.js', function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});