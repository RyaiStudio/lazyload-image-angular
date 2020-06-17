import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainModule } from './pages/main/main.module';
import { ImagesComponent } from './pages/images/images.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => MainModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
