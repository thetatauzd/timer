const server = require("http").createServer();
const io = require("socket.io")(server, { path: "/socket.io" });

io.on("connection", client => {
    let time = 0;
    let setting = true;
    let timer;
    client.on("subscribeToTimer", (interval, length) => {
        console.log("client is subing to timer :" + interval);
        time = length;
        timer = setInterval(() => {
            console.log("Timer app was started :" + time);

            io.emit("timer", time, setting);
            time -= 1;
            if (time <= -1) {
                setting = !setting;
                time = 0;
                io.emit("timer", time, setting);
                clearInterval(timer);
            }
        }, interval);
    });

    client.on("reset", reset => {
        time = 0;
        setting = true;
        clearInterval(timer);
    });
});

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.listen(server_port, server_ip_address, function () {

    console.log( "Listening on " + server_ip_address + ", server_port " + server_port  );

});
