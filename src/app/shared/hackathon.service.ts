import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HackathonService {
  private apiUrl = 'http://localhost:8746/api/hackathons'; // Update with your actual API URL

  constructor(private http: HttpClient) { }

  getHackathons(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getHackathonDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  registerForHackathon(competitors: any): Observable<any> {
    // Implement registration logic here
    return this.http.post<any>(`http://localhost:8746/api/competitors`, {competitors });
  }
}
