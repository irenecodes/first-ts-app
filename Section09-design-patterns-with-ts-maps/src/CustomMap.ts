export class CustomMap {
    // carry a reference to the google map. googleMap will be an instance of google.maps.Map
    private googleMap: google.maps.Map;
    // instantiate 
    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
}