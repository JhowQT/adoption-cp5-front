import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private API = 'http://localhost:8082/animals';

  constructor(private http: HttpClient) {}

  getAvailable(): Observable<Animal[]> {
    return this.http.get<Animal[]>(`${this.API}/available`);
  }

  getById(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.API}/${id}`);
  }
}
