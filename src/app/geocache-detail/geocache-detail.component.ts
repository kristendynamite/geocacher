import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Geocache } from '../geocache.model';

@Component({
  selector: 'app-geocache-detail',
  templateUrl: './geocache-detail.component.html',
  styleUrls: ['./geocache-detail.component.css']
})
export class GeocacheDetailComponent implements OnInit {
  geocacheId: number = null;


  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.geocacheId = parseInt(urlParameters['id']);
    });
  }

}
