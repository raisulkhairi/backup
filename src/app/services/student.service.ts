/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}
  getAllStudentBySubject(id: string): Observable<any[]> {
    return this.http.get<any[]>(
      `https://aabe-180-243-145-239.ngrok.io/api/student/getAllStudentRelatedToTheSubject/${id}`
    );
  }
}
