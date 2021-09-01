import { v1 } from "uuid"
import { fetchUser } from "../../api/handleRequests";

import User from "../../types/User";

const userInfoCommand = (id: string) => {
    let userInfo: User = { user: {} };
    fetchUser(id)
        .then((response) => userInfo = response)

    const { name, joinDate } = userInfo.user;
    // const createdAtYYYMMDD = `${createdAt.getFullYear()}-${createdAt.getMonth()}-${createdAt.getDay()}`
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
                        type: "webhookMessage",
                        data: {
                            embeds: [
                                {
                                    title: `Information about ${name}`,
                                    fields: [
                                        {
                                            name: "Joined at",
                                            description: joinDate
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            }
        }
    }
}

export default userInfoCommand;