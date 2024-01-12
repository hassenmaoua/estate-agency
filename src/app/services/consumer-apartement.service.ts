import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from 'src/core/models/apartement';

@Injectable({
  providedIn: 'root'
})
export class ConsumerApartementService {

  constructor(private http: HttpClient) { }

  // HttpClient API get() method => Get apartements
  getApartments() {
    return this.http.get<Apartment[]>('http://localhost:3000/appartements')
  }

  // HttpClient API get() method => Get apartement by Id
  getApartmentById(id: number) {
    return this.http.get<Apartment>(`http://localhost:3000/appartements/${id}`);
  }

  // HttpClient API post() method => Create apartement
  createApartment(apartement: any): Observable<Apartment> {
    return this.http.post<Apartment>('http://localhost:3000/appartements', apartement)
  }

  // HttpClient API put() method => Update apartment
  updateApartment(id: number, apartement: any): Observable<Apartment> {
    return this.http.put<Apartment>(`http://localhost:3000/appartements/${id}`, apartement)
  }


  // HttpClient API put() method => Update apartment
  deteleApartment(id: number): Observable<Apartment> {
    return this.http.delete<Apartment>(`http://localhost:3000/appartements/${id}`)
  }


}
