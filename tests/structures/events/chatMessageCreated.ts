// handlers
import { handleResponseWhenItIsAMessage } from "../../api/handleRequests";

// structures
import helpCommandBody from "../commands/help";
import testCommandBody from "../commands/test";
import userInfoCommand from "../commands/userInfo";

const chatMessageCreated = (parsedData: any) => {
    const messageContent = parsedData[1].message.content.document.nodes[0].nodes[0]?.leaves[0].text.toLowerCase();
    if (messageContent?.startsWith("e!testcommand")) return handleResponseWhenItIsAMessage(
        testCommandBody,
        parsedData[1].channelId
    )
    if (messageContent?.startsWith("e!help")) return handleResponseWhenItIsAMessage(
        helpCommandBody,
        parsedData[1].channelId
    )
    if (messageContent?.startsWith("e!userinfo")) return handleResponseWhenItIsAMessage(
        userInfoCommand(
            parsedData[1].message.createdBy
        ),
        parsedData[1].channelId
    )
}

export default chatMessageCreated;