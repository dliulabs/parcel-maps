import { faker } from "@faker-js/faker";
import { Mappable } from './CustomMap';

export default 'red';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  private locations: number[][] = [
    [-122.3402, 47.6093],
    [-122.3402, 47.6094],
    [-122.3403, 47.6094],
    [-122.3384, 47.6098],
    [-122.3389, 47.6095],
    [-122.3396, 47.6095],
    [-122.3379, 47.6097],
    [-122.3378, 47.6097],
    [-122.3396, 47.6091],
    [-122.3383, 47.6089],
    [-122.3379, 47.6093],
    [-122.3381, 47.6095],
    [-122.3378, 47.6095],
  ];

  constructor() {
    this.name = faker.person.firstName();
    let n = Math.floor(Math.random() * this.locations.length) + 1
    let [lat, lng] = this.locations[n];
    this.location = {
      lat: lat,
      lng: lng,
    };
  }

  markerContent(): string {
    return `{"User": "${this.name}"}`;
  }
}