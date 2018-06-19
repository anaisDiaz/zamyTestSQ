import { Time } from '@angular/common';

export class Event {
    id: string;
    name: string;
    description: string;
    location: string;
    date: Date;
    price: number;
    lastRegisterDate: Date;
    imageURL: string;

    constructor(name: string,
        description: string,
        location: string,
        date: Date,
        price: number,
        lastRegisterDate: Date,
        imageURL: string) {
            this.name = name;
            this.description = description;
            this.location = location;
            this.date = date;
            this.price = price;
            this.lastRegisterDate = lastRegisterDate;
            this.imageURL = imageURL;
    }

    toJSON(): JSON {
        return JSON.parse(
            '{"name": "' + this.name +
            '" , "description": "' + this.description +
            '" , "location": "' + this.location +
            '" , "date": "' + this.date.toISOString +
            '" , "price": ' + this.price +
            ' , "lastRegisterDate": "' + this.lastRegisterDate +
            '" , "imageURL": "' + this.imageURL +
            '" }'
        );
    }
}
