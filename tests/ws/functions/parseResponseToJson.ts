import GeneralEventI from "../../types/GeneralEventOptions";

/**
 * 
 * @param response the websocket response about any event, its returned
 * as a dict with a bunch information followed by a number
 * Example: 0{"sid": "some_id", "etc": "..."}
 * 
 * @returns the response parsed in JSON format (which i can manipulate
 * to get the data i want)
 * 
 */
const parseResponseToJson = (response: string): any => {
    let filteredResponse = response;
    try {
        const chars = [filteredResponse.substring(0, 1), filteredResponse.substring(1, 2)];
        chars.map(char => {
            if (Number.isInteger(Number(char))) filteredResponse = filteredResponse.replace(char, "");
        });
        return JSON.parse(filteredResponse);
    }
    catch (err) { }
    return JSON.parse('[]')
};

export default parseResponseToJson;