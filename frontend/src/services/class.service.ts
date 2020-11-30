import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class } from 'src/interfaces/ClassInterface';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = "http://ec2-34-238-241-74.compute-1.amazonaws.com:3000/turma"
  }

  getClassById(id: string): Observable<Class> {
      return this.http.get<Class>(`${this.apiUrl}/${id}?expand=professor`)
  }

}
