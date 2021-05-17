import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cat } from '../models/cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http : HttpClient) { }

  findAll() : Observable<Cat[]>{
    return this.http.get<Cat[]>(`${environment.apiUrl}/cats`);
  }

  findById(id : any) : Observable<Cat> {
    return this.http.get<Cat>(`${environment.apiUrl}/cats/${id}`);
  }

  create(cat :Cat) : Observable<Cat> {
    return this.http.post<Cat>(`${environment.apiUrl}/cats`, cat);
  }

  update(cat : Cat) : Observable<Cat> {
    return this.http.patch<Cat>(`${environment.apiUrl}/cats/${cat.id}`, cat);
  }

  delete(id : any){
    return this.http.delete(`${environment.apiUrl}/cats/${id}`)
  }
}
