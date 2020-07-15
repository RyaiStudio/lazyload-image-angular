import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main/main.module').then(r => r.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}