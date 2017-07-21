import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GeocachesComponent } from './geocaches/geocaches.component';
import { AddGeocacheComponent } from './add-geocache/add-geocache.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    GeocachesComponent,
    AddGeocacheComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
