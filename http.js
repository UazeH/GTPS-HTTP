var http = require("http");

var readline = require('readline'); 
var rl = readline.createInterface({ 
input: process.stdin, 
output: process.stdout 
});

var blacklist = new Map();

var clear = require('console-clear')

var setTitle = require('console-title');
setTitle('Simple HTTP');

var visit = 0;

function displayTime() {
    var str = "";

    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()

    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    str += "[" + hours + ":" + minutes + ":" + seconds + " ";
    if(hours > 11){
        str += "PM]"
    } else {
        str += "AM]"
    }
    return str;
}

var prompt = require('prompt-sync')();

var username = prompt(`Username : `);
if (username == "Username"){
  console.log("[+] Username Corect")
  console.clear()
}
else
{
console.log("[!] Wrong Username")
process.exit(0);
}
rl.close();

var password = prompt(`Password : `);
if (password == "Password"){
  console.log("[+] Password Correct!")
  console.log("[+] Login Succesfully")
  console.clear()
}
else
{
  console.log("[!] Wrong Password")
  process.exit(0);
}
rl.close();

var ipcoy = prompt('What IP Your Server: ');
console.clear()
var port = prompt('Enter Port UDP (Default : 17091) : ');
console.clear()
var messagemaintenance = prompt('Enter Message when Server is Maintenance : ');
console.clear()

const client = http.createServer(function(req, res) {
    let ipAddress = req.connection.remoteAddress;
    ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
          if (req.url == "/growtopia/server_data.php") {
			if (req.headers["host"] == "growtopia2.com") {
            if (req.url = "TRACE") {
                res.write(`server|`+ ipcoy +`\nport|`+ port +`\ntype|1\n#maint|`+ messagemaintenance +`\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`);
                            res.end();
                            console.log(`${displayTime()} New Connection Growtopia with IP = ${ipAddress} / Method = ${req.method} / in : ${req.url}`);
                          }
                        }
                        else {
                        console.log(`${displayTime()} New Connection with IP = ${ipAddress} / Method = ${req.method} / in : ${req.url}`);
					    return res.end();
                        }
                        if (req.url == "/") {
                            if (req.url = "TRACE") {
                                res.writeHead(511, "Simple HTTP");
                                res.write(`<script>alert('Simple GTPS-HTTP')</script>`)
                                console.log(`${displayTime()} New Connection with IP = ${ipAddress} / Method = ${req.method} / in : ${req.url}`);
							}
                            res.end();
                            res.destroy();
                          };
                      }
				});

client.listen(80)
function add_address(address) {
    blacklist.set(address, Date.now() + 5000);
}
client.on("connection", function (socket) {
    let ipsocket = socket.remoteAddress;
    ipsocket = ipsocket.split(/::ffff:/g).filter(i => i).join("");
    if (!blacklist.has(socket.remoteAddress)) {
        add_address(socket.remoteAddress);
    }
    else {
        var not_allowed = blacklist.get(socket.remoteAddress);
        if (Date.now() > not_allowed) {
            blacklist.delete(socket.remoteAddress);
        }
        else
            socket.destroy();
            console.log(`${displayTime()} Banned Connection With IP = ${ipsocket}`);
            process.env.BLACKLIST
            process.env.limiter
            process.env.helmet
    }
});
console.log("Simple GTPS-HTTP")
console.log("HTTP Server is Running")
