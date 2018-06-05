export class Participant {
    inscriptionDate: Date;

    constructor(inscriptionDate: Date) {
        this.inscriptionDate = inscriptionDate;
    }

    toJSON(): JSON {
        return JSON.parse(
            '{"inscriptionDate":"' + this.inscriptionDate +
            '"}'
        );
    }
}
