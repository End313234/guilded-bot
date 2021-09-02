// handlers
import { handleResponseWhenItIsAMessage } from "../../api/handleRequests";

// structures
import helpCommandBody from "../commands/help";
import testCommandBody from "../commands/test";
import userInfoCommand from "../commands/userInfo";

const getText = (parsedData: any) =>
    parsedData[1].message.content.document.nodes[0].nodes[0].leaves[0].text.toLowerCase();

const chatMessageCreated = async (parsedData: any) => {
    const messageContent = getText(parsedData);

    if (messageContent?.startsWith("e!testcommand")) return handleResponseWhenItIsAMessage(
        testCommandBody,
        parsedData[1].channelId
    )

    if (messageContent?.startsWith("e!help")) return handleResponseWhenItIsAMessage(
        helpCommandBody,
        parsedData[1].channelId
    )

    if (messageContent?.startsWith("e!userinfo")) {
        console.log(parsedData.content);

        const message = await userInfoCommand(
            parsedData[1].message.createdBy
        )


        return handleResponseWhenItIsAMessage(
            message,
            parsedData[1].channelId
        )
    }
}

export default chatMessageCreated;