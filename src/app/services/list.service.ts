import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { card } from '../models/object.interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getAllObjects(): Observable<card[]> {
    return this.http.get<card[]>('https://picsum.photos/v2/list');
  }

  getObjectById(id: string): Observable<card>{
    return this.http.get<card>('https://picsum.photos/id/' + id + '/info')
  }
}
