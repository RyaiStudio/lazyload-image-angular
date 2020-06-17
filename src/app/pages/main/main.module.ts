import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from '../main/main.component';
import { ImagesComponent } from '../images/images.component';
import { MainRoutingModule } from './main-routing.module';

import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [MainComponent, ImagesComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule],
  // exports: [LazyLoadImageModule],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule {}
