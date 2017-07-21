import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeocachesComponent } from './geocaches/geocaches.component';

const appRoutes: Routes = [
  {
    path: '',
    component: GeocachesComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
