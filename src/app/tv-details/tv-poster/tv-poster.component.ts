import { Component, OnInit, Input } from '@angular/core';
import { Poster } from 'src/app/models/poster.model';

@Component({
  selector: 'app-tv-poster',
  templateUrl: './tv-poster.component.html',
  styleUrls: ['./tv-poster.component.scss']
})
export class TvPosterComponent implements OnInit {

  @Input() poster: Poster;
  constructor() { }

  ngOnInit(): void {
  }

}
