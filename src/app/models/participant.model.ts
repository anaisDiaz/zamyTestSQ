export class Participant {
    userId: string;
    inscriptionDate: Date;

    constructor(userId: string, inscriptionDate: Date) {
        this.userId = userId;
        this.inscriptionDate = inscriptionDate;
    }

    toJSON(): JSON {
        return JSON.parse(
            '{"inscriptionDate":"' + this.inscriptionDate +
            '"}'
        );
    }
}
