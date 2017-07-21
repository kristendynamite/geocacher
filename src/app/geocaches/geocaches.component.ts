import { Component, OnInit } from '@angular/core';
import { Geocache } from '../geocache.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-geocaches',
  templateUrl: './geocaches.component.html',
  styleUrls: ['./geocaches.component.css']
})
export class GeocachesComponent implements OnInit {
  constructor(private router: Router) { }

  geocaches: Geocache[] = [
    new Geocache(40.714224, -73.961452, "277 Bedford Avenue, Brooklyn, NY 11211, USA", "Kristen McKee")
  ];

  goToDetailPage(clickedGeocache: Geocache) {
    //  this.router.navigate(['geocaches/' + clickedGeocache.$key]);
   };


  ngOnInit() {
  }

}
