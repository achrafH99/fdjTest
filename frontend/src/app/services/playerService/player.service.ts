import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPlayersByTeam(teamId: any) {
    return this.http.get(`${this.baseUrl}/players/team/${teamId}`);
  }
}
