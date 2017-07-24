import { geoKey } from './api-keys';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Geocache } from './geocache.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GeocacheApiService {
  geocaches: FirebaseListObservable<any[]>;
  constructor(private http: Http, private database: AngularFireDatabase) {
    this.geocaches = database.list('geocaches');
  }

  getGeocaches() {
  return this.geocaches;
}

  addGeocache(newGeocache: Geocache) {
     this.geocaches.push(newGeocache);
   }

   getGeocacheById(geocacheId: string){
    return this.database.object('geocaches/' + geocacheId);
  }

   getPhysicalAddress(lat: string, lng: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key="+geoKey);
  }

  getLatLong(streetNumber: number, streetName: string, city: string, state: string){
   return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+streetNumber+"+"+streetName+"+"+city+"+"+state+"&key="+geoKey);
 }
}
