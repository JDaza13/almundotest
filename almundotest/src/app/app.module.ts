import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelFilterComponent } from './hotel-filter/hotel-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    HotelFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
