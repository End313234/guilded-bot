// ws
import WebSocket from "ws";

// dotenv
import { config } from "dotenv";

// services
import onMessageReceive from "./services/message";

// load .env
config()

const token = process.env.TOKEN;
const ws = new WebSocket(`wss://api.guilded.gg/socket.io/?jwt=undefined&EIO=3&transport=websocket&guildedClientId=${process.env.GUILDED_CLIENT_ID}`, {
    headers: {
        cookie: `hmac_signed_session=${token}`
    }
});

// opening connection to ws
ws.on("open", () => {
    console.log("WS openned");
    setInterval(() => {
        ws.send("2");
    }, 25000);
});

// receiving data from ws
// this data is used to identify events
ws.on("message", onMessageReceive);