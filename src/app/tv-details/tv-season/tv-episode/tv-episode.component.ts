import { Component, OnInit, Input } from '@angular/core';
import { Episode } from 'src/app/models/tv-season.model';

@Component({
  selector: 'app-tv-episode',
  templateUrl: './tv-episode.component.html',
  styleUrls: ['./tv-episode.component.scss']
})
export class TvEpisodeComponent implements OnInit {

  @Input() episodes: Episode[];
  constructor() { }

  ngOnInit(): void {
  }

}
