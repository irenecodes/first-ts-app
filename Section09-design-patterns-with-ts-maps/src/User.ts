import faker from 'faker';
import {Mappable} from './CustomMap';

export class User implements Mappable {
    name: string;
    // type an obj 
    location: {
        lat: number;
        lng: number;
    };
    color: 'blue'

    // initialize the info 
    constructor() {
        this.name = faker.name.firstName();
        // initialize objects in constructors as such. this.location.lat = 12 won't work
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `User Name: ${this.name}`
    }
}

