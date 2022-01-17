import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../models/subject';
@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}
  getAllSubject(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`https://aabe-180-243-145-239.ngrok.io/api/subject`);
  }
  getSubjectByID(id: string): Observable<Subject> {
    return this.http.get<Subject>(`https://aabe-180-243-145-239.ngrok.io/api/subject/${id}`);
  }
}
