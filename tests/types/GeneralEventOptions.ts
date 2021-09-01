import HelloEventI from "./HelloEventI";

export default interface GeneralEventI extends HelloEventI {
    eventName?: string;
    eventData?: Object
}