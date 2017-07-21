import { Component, OnInit } from '@angular/core';
import { GeocacheApiService } from '../geocache-api.service';
import { Geocache } from '../geocache.model';

@Component({
  selector: 'app-add-geocache',
  templateUrl: './add-geocache.component.html',
  styleUrls: ['./add-geocache.component.css'],
  providers: [GeocacheApiService]
})
export class AddGeocacheComponent implements OnInit {

  constructor(private geocacheApiService: GeocacheApiService) { }

  ngOnInit() {
  }

  submitByLatLong(lat: string, lng: string, creator: string) {
    this.geocacheApiService.getPhysicalAddress(lat, lng).subscribe(response=>{
      console.log(response.json());
      var address=response.json().results[0].formatted_address;
      var newGeocache: Geocache = new Geocache(lat, lng, address, creator);
      this.geocacheApiService.addGeocache(newGeocache);
    })

  }

  submitByAddress(streetNumber: number, streetName: string, city: string, state: string, creator: string) {
    this.geocacheApiService.getLatLong(streetNumber, streetName, city, state).subscribe(response=>{
      console.log(response.json());
      var address=response.json().results[0].formatted_address;
      var addressLat=response.json().results[0].geometry.location.lat;
      var addressLong=response.json().results[0].geometry.location.lng;
      var newGeocache: Geocache = new Geocache(addressLat, addressLong, address, creator);
      this.geocacheApiService.addGeocache(newGeocache);
    })
  }

}
