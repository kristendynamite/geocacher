import { Component, OnInit } from '@angular/core';
import { Geocache } from '../geocache.model';
import { Router } from '@angular/router';
import { GeocacheApiService } from '../geocache-api.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-geocaches',
  templateUrl: './geocaches.component.html',
  styleUrls: ['./geocaches.component.css'],
  providers: [GeocacheApiService]
})
export class GeocachesComponent implements OnInit {
  geocaches: FirebaseListObservable<any[]>;
  // geocaches: Geocache[] = [];

  constructor(private router: Router, private geocacheApiService: GeocacheApiService) { }

  ngOnInit() {
    this.geocaches = this.geocacheApiService.getGeocaches();
  }

  goToDetailPage(clickedGeocache: Geocache) {
     this.router.navigate(['geocaches/' + clickedGeocache.lat]);
  };

}
