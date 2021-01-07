import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
// console.log(user);

const company = new Company();
// console.log(company);

const customMap = new CustomMap('map');

// user and company correctly fulfills Mappable interface - this is an implicit check bc TS is checking user and company has the correct properties with the correct arguments to be an argument to addMarker()
customMap.addMarker(user);
customMap.addMarker(company);

