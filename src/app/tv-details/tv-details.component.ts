import { Component, OnInit } from '@angular/core';
import { Tv } from '../models/tv-details.model';
import harcodedTvData from '../resources/tv.details.json';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})

export class TvDetailsComponent implements OnInit {
  tvData: Tv = harcodedTvData;
  constructor() { }

  ngOnInit(): void {
  }

}
