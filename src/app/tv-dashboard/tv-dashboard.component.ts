import { Component, OnInit } from '@angular/core';
import { TvList } from '../models/tv-list.model';
import tvListData from '../resources/tv.list.json';
import { Poster } from '../models/poster.model';

@Component({
  selector: 'app-tv-dashboard',
  templateUrl: './tv-dashboard.component.html',
  styleUrls: ['./tv-dashboard.component.scss']
})
export class TvDashboardComponent implements OnInit {
  tvList: TvList = tvListData;
  posterList: Poster[];
  constructor() { }

  ngOnInit(): void {
    this.createPosterList();
  }

  createPosterList() {
    this.posterList = tvListData.items.map(item => {
      return new Poster(
        item.name,
        item.popularity,
        item.vote_average,
        item.first_air_date,
        item.poster_path);
    });
  }

}
