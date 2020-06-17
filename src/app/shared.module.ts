import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FigureImageComponent } from './components/figure-image/figure-image.component';

@NgModule({
  declarations: [FigureImageComponent],
  exports: [FigureImageComponent],
  imports: [CommonModule],
})
export class SharedModule {}
