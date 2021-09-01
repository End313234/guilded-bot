import { v1 } from "uuid";

const helpCommandBody: any = {
    "messageId": v1(),
    "content": {
        "object": "value",
        "document": {
            "object": "document",
            "data": {},
            "nodes": [
                {
                    "object": "block",
                    "type": "webhookMessage",
                    "data": {
                        "embeds": [
                            {
                                "title": "Help Pannel",
                                "fields": [
                                    {
                                        "name": "testcommand",
                                        "value": "A simple command for tests. Returns an embed with some fields.",
                                        "inline": true
                                    },
                                    {
                                        "name": "help",
                                        "value": "Invokes this message.",
                                        "inline": true
                                    }
                                ]
                            }
                        ]
                    },
                    "nodes": []
                }
            ]
        }
    }
}

export default helpCommandBody;