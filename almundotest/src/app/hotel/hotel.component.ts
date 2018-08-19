import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
 
  Arr = Array;

  @Input() hotels: Hotel[];

  constructor() { }

  ngOnInit() {
  }

}
