import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hotel } from './hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  
  private hotelsUrl = 'https://almundotest-jdaza13.c9users.io:8081/hotels'; 

  constructor(
    private http: HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.hotelsUrl)
  }
  
}