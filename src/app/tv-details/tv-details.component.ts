import { Component, OnInit } from '@angular/core';
import { Tv } from '../models/tv-details.model';
import { TvSeason } from '../models/tv-season.model';
import harcodedTvData from '../resources/tv.details.json';
import hardcodedTvSeasonData from '../resources/tv.season.json';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})

export class TvDetailsComponent implements OnInit {
  tvData: Tv = harcodedTvData;
  tvSeasonData: TvSeason = hardcodedTvSeasonData;
  constructor() { }

  ngOnInit(): void {
  }

}
