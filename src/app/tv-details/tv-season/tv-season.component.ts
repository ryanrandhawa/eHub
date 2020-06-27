import { Component, OnInit, Input } from '@angular/core';
import { TvSeason } from 'src/app/models/tv-season.model';

@Component({
  selector: 'app-tv-season',
  templateUrl: './tv-season.component.html',
  styleUrls: ['./tv-season.component.scss']
})
export class TvSeasonComponent implements OnInit {
  seasonSelected = false;
  @Input() tvSeasonData: TvSeason;
  constructor() { }

  displayEpisodes() {
    this.seasonSelected = !this.seasonSelected;
  }

  ngOnInit(): void {
  }

}
