let momentLib = require('moment');
let momentTimeZone = require('moment-timezone');

let targetTimezone = "Europe/Berlin";

//process.argv gives us an array of command line parameters. line [npm, start, timezone]
if (process.argv.length != 3) {
    console.log(`No time zone provided.Current time zone is ${ momentLib.tz.guess()} ${ momentTimeZone().tz(momentLib.tz.guess()).format('MMMM Do YYYY, h:mm:ss a') }`);
    process.exit(1);

} else {
    targetTimezone = process.argv[2];
    console.log(`Current time zone is ${ momentLib.tz.guess()}.Provided Time at the timezone ${targetTimezone} ${ momentTimeZone().tz(targetTimezone).format('MMMM Do YYYY, h:mm:ss a')}`);

}