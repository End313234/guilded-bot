export default interface HelloEventI {
    sid?: string
    upgrades?: Array<any> // idk the type of the items on the array
    pingInterval?: number
    pingTimeout?: number
}