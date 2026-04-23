import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adoption } from '../models/adoption.model';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {

  private API = 'http://localhost:8083/adoptions';

  constructor(private http: HttpClient) {}

  create(userId: number, animalId: number): Observable<Adoption> {
    return this.http.post<Adoption>(
      `${this.API}?userId=${userId}&animalId=${animalId}`,
      {}
    );
  }

  getByUser(userId: number): Observable<Adoption[]> {
    return this.http.get<Adoption[]>(`${this.API}/user/${userId}`);
  }
}
