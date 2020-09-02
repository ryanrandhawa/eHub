import { Component, OnInit, Input } from '@angular/core';
import { TvSeason, Episode } from 'src/app/models/tv-season.model';

@Component({
  selector: 'app-tv-season',
  templateUrl: './tv-season.component.html',
  styleUrls: ['./tv-season.component.scss']
})
export class TvSeasonComponent implements OnInit {
  @Input() seasonNumber: number;
  seasonSelected = false;
  tvSeasonData: TvSeason;
  episodeData: Episode[] = [];
  constructor() { }

  displayEpisodes() {
    this.seasonSelected = !this.seasonSelected;
  }

  async ngOnInit() {
    this.tvSeasonData = await import('../../resources/tv.season-' + this.seasonNumber + '.json');
    this.episodeData = this.tvSeasonData.episodes;
  }

}
