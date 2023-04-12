import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllLeagues() {
    return this.http.get(`${this.baseUrl}/leagues`);
  }
}
