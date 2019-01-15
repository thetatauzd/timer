import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000"); //49500

function keepTime(cb) {
    socket.on("timer", (timestamp, setting) => cb(null, timestamp, setting));
}

function startTimer(length) {
    socket.emit("subscribeToTimer", 1000, length);
}

function reset() {
    socket.emit("reset", "");
}

export { keepTime, startTimer, reset };
