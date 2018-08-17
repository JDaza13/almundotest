import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hotel } from './hotel';
import { APP_CONSTANTS } from './constants';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(
    private http: HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(APP_CONSTANTS.API.API_BASE_PATH +
      APP_CONSTANTS.API.HOTELS_SERVICE.GET_HOTELS)
  }
  
}