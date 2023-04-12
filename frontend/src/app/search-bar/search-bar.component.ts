import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { TypeaheadMatch, TypeaheadOptionItemContext } from 'ngx-bootstrap/typeahead';
import { LeagueService } from '../services/leagueService/league.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @Output() leagueSelected = new EventEmitter<any>();
  placeHolder = 'Select league';
  keyword = 'name';
  data = [];

  constructor(private leaguesService: LeagueService) { }

  ngOnInit() {
    this.leaguesService.getAllLeagues().subscribe((data: any) => {
      data.forEach((league: any) => {
        this.data.push(league as never);
      });
    });
  }


  selectEvent(item: any) {
    this.leagueSelected.emit(item);
  }


}
