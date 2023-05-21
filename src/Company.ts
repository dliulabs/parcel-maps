import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
	companyName: string;
	catchPhrase: string;
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
		this.companyName = faker.company.name();
		this.catchPhrase = faker.company.catchPhrase();
		let n = Math.floor(Math.random() * this.locations.length) + 1
		let [lat, lng] = this.locations[n];
		this.location = {
			lat: lat,
			lng: lng,
		};
	}

	markerContent(): string {
		return `{"Company": "${this.companyName}"}`;
	}
}