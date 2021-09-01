// functions
import chatMessageCreated from "../../structures/events/chatMessageCreated";
import parseResponseToJson from "../functions/parseResponseToJson";

const onMessageReceive = (message: Buffer) => {
    const data = message.toString();
    const parsedData = parseResponseToJson(data);
    const eventType: string = parsedData[0]
    if (eventType === "ChatMessageCreated") return chatMessageCreated(parsedData)
}

export default onMessageReceive;