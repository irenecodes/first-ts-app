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

// Describing what is happening: 
// 1. import Custom Map which has the method addMarker which takes the interface of Mappable 
// 2. addMarker takes argument of interface Mappable - the arguments that get passed into addMarker MUST fulfill the interface's requirements 
// 3. Assign addMarker's position match the (PARAMETER i.e. user)'s location via mappable(the parameter).location.lat. 
// 4. Created a listener for marker upon click - google maps docs say can use google.maps.InfoWindow to create the pop-up infoWindow and add content: , then call the .open() method on the infoWindow variable created with params THIS google map and adding the marker that has positions assigned to it from step 3. 
// 5. add markerContent as a method to Mappable interface with an expected return - go to these components/CLASSES in this specific case and make sure they have the markerContent in order to fulfil interface's rules 
// 6. add a return string on markerContent for each component/CLASS that is being passed into customMap.addMarker(CLASS/PARAM HERE) 