import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTeamsByLeague(leagueId: any) {
    return this.http.get(`${this.baseUrl}/teams/league/${leagueId}`);
  }
}
