const argv = require('yargs').argv
const request = require('request')

if (argv.server != undefined) {
    request(argv.server+"/send?command="+argv.command, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log("["+argv.server+"]"+body);
    })
} else {
    console.log("I need server")
}