import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
 
  Arr = Array;
 
  hotel: Hotel = {
    'id': '249942',
    'name': 'Hotel Stefanos',
    'stars': 3,
    'price': 994.18,
    'image': '4900059_30_b.jpg',
    'amenities': [
      'safety-box',
      'nightclub',
      'deep-soaking-bathtub',
      'beach',
      'business-center'
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}

/*
  amenities = [
    "safety-box",
    "nightclub",
    "deep-soaking-bathtub",
    "beach",
    "business-center",
    "bathtub",
    "newspaper",
    "restaurant",
    "fitness-center",
    "garden",
    "bathrobes",
    "beach-pool-facilities",
    "coffe-maker",
    "children-club",
    "separate-bredroom",
    "kitchen-facilities"
  ];
*/