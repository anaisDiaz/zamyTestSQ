import { Time } from '@angular/common';

export class Event {
    id: string;
    name: string;
    location: string;
    date: Date;
    price: number;
    lastRegisterDate: Date;
    imageURL: string;

    constructor(name: string,
        location: string,
        date: Date,
        price: number,
        lastRegisterDate: Date,
        imageURL: string) {
            this.name = name;
            this.location = location;
            this.date = date;
            this.price = price;
            this.lastRegisterDate = lastRegisterDate;
            this.imageURL = imageURL;
    }

    toJSON(): JSON {
        return JSON.parse(
            '{"name": "' + this.name +
            '" , "location": "' + this.location +
            '" , "date": "' + this.date +
            '" , "price": "' + this.price +
            '" , "lastRegisterDate": "' + this.lastRegisterDate +
            '" , "urlImage": "' + this.imageURL +
            '" }'
        );
    }
}
