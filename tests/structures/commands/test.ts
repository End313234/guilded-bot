import { v1 } from "uuid";

const testCommandBody: any = {
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
                                "title": "consegui enviar embed",
                                "fields": [
                                    {
                                        "name": "test1",
                                        "value": "test2",
                                        "inline": true
                                    },
                                    {
                                        "name": "test3",
                                        "value": "test4",
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
};

export default testCommandBody