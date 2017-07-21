import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Geocache } from '../geocache.model';
import { GeocacheApiService } from '../geocache-api.service';

@Component({
  selector: 'app-geocache-detail',
  templateUrl: './geocache-detail.component.html',
  styleUrls: ['./geocache-detail.component.css'],
  providers: [GeocacheApiService]
})
export class GeocacheDetailComponent implements OnInit {
  geocacheId: number = null;


  constructor(private route: ActivatedRoute, private location: Location, private albumService: GeocacheApiService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.geocacheId = parseInt(urlParameters['id']);
    });
  }

}
