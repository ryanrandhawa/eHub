import { Component, OnInit, Input } from '@angular/core';
import { Tv } from 'src/app/models/tv-details.model';

@Component({
  selector: 'app-tv-poster',
  templateUrl: './tv-poster.component.html',
  styleUrls: ['./tv-poster.component.scss']
})
export class TvPosterComponent implements OnInit {

  @Input() tvData: Tv;
  constructor() { }

  ngOnInit(): void {
  }

}
