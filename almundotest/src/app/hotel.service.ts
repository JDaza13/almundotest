import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Hotel } from './hotel';

import { HOTELS } from './mock-hotels';



@Injectable({
  providedIn: 'root'
})
export class HotelService {
  
  private hotelsUrl = 'https://almundotest-jdaza13.c9users.io:8081/hotels'; 

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    
  private log(message: string) {
    this.messageService.add(`HotelService: ${message}`);
  }
  
  getHotels(): Observable<Hotel[]> {
    this.messageService.add('HotelService: fetched hotels');
    return this.http.get<Hotel[]>(this.hotelsUrl)
  }
  
}
