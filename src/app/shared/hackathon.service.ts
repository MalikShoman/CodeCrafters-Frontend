import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HackathonService {
  private apiUrl = 'http://localhost:5121/api/hackathons'; // Update with your actual API URL

  constructor(private http: HttpClient) { }

  getHackathons(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getHackathonDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  registerForHackathon(competitors: any): Observable<any> {
    // Implement registration logic here
    return this.http.post<any>(`http://localhost:5121/api/competitors`, {competitors });
  }

  addHackathon(hackathon: any): Observable<any> {
    // Assuming you have the token accessible as a variable named 'token'
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    });

    return this.http.post<any>(
      `http://localhost:5121/api/competitors`,
      { hackathon },
      { headers }
    );
  }
}
