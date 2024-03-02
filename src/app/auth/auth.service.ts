import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://your-api-url/auth'; // Update with your actual API URL

  constructor(private http: HttpClient) { }

  signUp(signUpData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, signUpData).pipe(
      catchError(error => {
        throw error;
      })
    );
  }

  login(loginData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, loginData).pipe(
      catchError(error => {
        throw error;
      })
    );
  }

  logout(): Observable<any> {
    // Implement logout logic if needed
    return this.http.post<any>(`${this.apiUrl}/logout`, {}).pipe(
      catchError(error => {
        throw error;
      })
    );
  }
}
