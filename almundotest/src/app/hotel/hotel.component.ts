import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
 
  hotel: Hotel = {
    id: 1,
    name: 'Hilton'
  };

  constructor() { }

  ngOnInit() {
  }

}
