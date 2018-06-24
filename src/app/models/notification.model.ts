export class Notification {
    id: string;
    eventId: string;
    eventName: string;

    constructor(eventId: string, eventName: string) {
        this.eventId = eventId;
        this.eventName = eventName;
    }

    toJSON(): JSON {
        return JSON.parse(
            '{"eventId": "' + this.eventId +
            '" , "eventName": "' + this.eventName +
            '" }'
        );
    }
}
