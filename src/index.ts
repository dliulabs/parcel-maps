import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './Company';
import color from './User'; // 'red'

async function initMap(divId: string) {
	console.log(`hi, there ${color} !`);
	const user = new User();
	console.log(user);
	const company = new Company();
	console.log(company);
	const customMap = await CustomMap.build(divId);
	await customMap.addMarker(user);
	await customMap.addMarker(company);
}

initMap('map');