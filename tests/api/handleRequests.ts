import axios from "axios";
import { config } from "dotenv";
import User from "../types/User";

config()

export const handleResponseWhenItIsAMessage = (body: Object, channelId: string) => {
    axios({
        method: "POST",
        url: `https://www.guilded.gg/api/channels/${channelId}/messages`,
        data: body,
        headers: {
            cookie: `hmac_signed_session=${process.env.TOKEN}`
        }
    })
        .catch((error) => console.log(error))
}

export const fetchUser = async (id: string) => axios({
        method: "GET",
        url: `https://www.guilded.gg/api/users/${id}`,
        headers: {
            cookie: `hmac_signed_session=${process.env.TOKEN}`
        }
    }).then(response => response.data);