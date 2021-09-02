import { v1 } from "uuid"
import { fetchUser } from "../../api/handleRequests";

import User from "../../types/User";

const userInfoCommand = async (id: string) => {
    let userInfo: User = await fetchUser(id)

    const { name, joinDate } = userInfo.user;

    return {
        messageId: v1(),
        content: {
            object: "value",
            document: {
                object: "document",
                data: {},
                nodes: [
                    {
                        object: "block",
                        type: "paragraph",
                        data: {},
                        nodes: [
                            {
                              object: "text",
                              leaves: [
                                {
                                  object: "leaf",
                                  text: `Information about ${name}`,
                                  marks: []
                                }
                              ]
                            },
                            {
                              object: "text",
                              leaves: [
                                {
                                  object: "leaf",
                                  text: `Joined at ${joinDate}`,
                                  marks: []
                                }
                              ]
                            }
                        ]
                    }
                ]
            }
        }
    }
}

export default userInfoCommand;