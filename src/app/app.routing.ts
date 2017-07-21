import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeocachesComponent } from './geocaches/geocaches.component';
import { AddGeocacheComponent } from './add-geocache/add-geocache.component'
import { GeocacheDetailComponent } from './geocache-detail/geocache-detail.component'

const appRoutes: Routes = [
  {
    path: '',
    component: GeocachesComponent
  },

  {
    path: 'add-geocache',
    component: AddGeocacheComponent
  },

  {
    path: 'geocache-detail:/id',
    component: GeocacheDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
