import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';

import { HotelService } from '../hotel.service';


declare var $:any;

@Component({
  selector: 'app-hotel-filter',
  templateUrl: './hotel-filter.component.html',
  styleUrls: ['./hotel-filter.component.scss']
})
export class HotelFilterComponent implements OnInit {
  
  Arr = Array;
  
  private filterCollapsableId = 'filter-collapsable-container-' + Date.now();
  private filterVisible = false;
  private allStars = true;
  
  hotelsResult : Hotel[];
  
  private searchParams = {
    name: null,
    stars: {
      one: true,
      two: true,
      three: true,
      four: true,
      five: true
    }
  }

  constructor(private hotelService: HotelService) { 
  }

  ngOnInit() {
    this.toggleFilter();
    this.applyFilter();
  }
  
  toggleFilter(): void {
    this.filterVisible = !this.filterVisible;
    $('#' + this.filterCollapsableId).collapse('toggle');
  }
  
  setAllStars(): void {
    console.log('all stars value:' + this.allStars);
    if(this.allStars){
      this.searchParams.stars = {
        one: true,
        two: true,
        three: true,
        four: true,
        five: true
      }
    }
  }
  
  applyFilter(): void {
    this.hotelService.getHotels()
        .subscribe(hotels => this.hotelsResult = hotels);
  }

}