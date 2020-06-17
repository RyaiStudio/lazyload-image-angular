import { BrowserModule } from '@angular/platform-browser';
import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, LazyLoadImageModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
