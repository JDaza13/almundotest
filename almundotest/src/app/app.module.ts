import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
