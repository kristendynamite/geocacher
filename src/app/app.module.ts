import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { GeocachesComponent } from './geocaches/geocaches.component';
import { AddGeocacheComponent } from './add-geocache/add-geocache.component';

import { routing } from './app.routing';
import { GeocacheDetailComponent } from './geocache-detail/geocache-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GeocachesComponent,
    AddGeocacheComponent,
    GeocacheDetailComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
