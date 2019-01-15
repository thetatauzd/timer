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

const port = 8000;
server.listen(port, function(err) {
    if (err) throw err;
    console.log("listenting on port :" + port);
});
