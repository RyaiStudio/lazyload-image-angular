import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FigureImageComponent } from './components/figure-image/figure-image.component';

@NgModule({
  declarations: [FigureImageComponent],
  exports: [FigureImageComponent, LazyLoadImageModule],
  imports: [CommonModule, LazyLoadImageModule],
})
export class SharedModule {}
