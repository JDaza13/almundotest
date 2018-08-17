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
      1: true,
      2: true,
      3: true,
      4: true,
      5: true
    }
  };
  
  private queryParams = {
    name: null,
    stars: []
  };

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
    if(this.allStars){
      this.searchParams.stars = {
        1: true,
        2: true,
        3: true,
        4: true,
        5: true
      }
    }
  }
  
  buildQueryRequest(): void {
    
    this.queryParams.name = this.searchParams.name;
    this.queryParams.stars = [];

    let starskeys = Object.keys(this.searchParams.stars);
    let peerStars = this.searchParams.stars;

    let filtered = starskeys.filter(function(key) {
        return peerStars[key]
    });
    
    this.queryParams.stars = filtered;
  }
  
  applyFilter(): void {
    
    this.buildQueryRequest();
    this.hotelService.getHotels(this.queryParams)
        .subscribe(hotels => this.hotelsResult = hotels);
  }

}