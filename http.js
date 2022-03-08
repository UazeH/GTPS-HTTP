var clear = require('console-clear')

var http = require("http");

var readline = require('readline'); 
var rl = readline.createInterface({ 
input: process.stdin, 
output: process.stdout 
});

rl.question("Password : ", function(password) {
        if (password === "http")
        {
		console.clear ()
        var prompt = require('prompt-sync')();
        var ip = prompt('What IP Your Server: ');
        console.clear()
        var port = prompt('Enter Port UDP (Default :17091): ');
        console.clear()
        var packet = "server|" + ip + "\nport|17091\ntype|1\n#maint|Mainetrance message (Not used for now) -- NodeJS-GTPS\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001";
        const http = require("http");
        var visit = 0;

const client = http.createServer(function(req, res) {
    let ipAddress = req.connection.remoteAddress;
    ipAddress = ipAddress.split(/::ffff:/g).filter(a => a).join('');
    if (req.url == "/growtopia/server_data.php") {
        if (req.url = "GET") {
            visit++;
            visit++;res.write(`server|`+ ip +`\nport|17091\ntype|1\n#maint|Growtopia Private Server\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001`);
            res.end();
                        res.end();
                        console.log(`==========[Growtopia LOGS]==========\n[!] New Connection with IP = ${ipAddress}`)
                        console.log(`[!] Req Method = ${req.method}`)
                        console.log(`[!] Entered Route = ${req.url}`)
                        console.log('[!] Headers = ' + req.headers['user-agent'])
                        console.log(`==================================`)
        }
    }
    else {
        console.log(`==========[Protect LOGS]==========\n[!] New Connection with IP = ${ipAddress}`)
                      console.log(`[!] Req Method = ${req.method}`)
                      console.log(`[!] Entered Route = ${req.url}`)
                      console.log('[!] Headers = ' + req.headers['user-agent'])
                      console.log(`==================================`)
        res.writeHead(598, "Simple HTTP");
            res.end();
            res.destroy();
    }
})
client.listen(80)
console.log("HTTP Running in Port 80!")
}
else
{
console.log("Wrong Password")
process.exit(0);
}
rl.close();
});