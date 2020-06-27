import { Component, OnInit, Input } from '@angular/core';
import { Tv } from 'src/app/models/tv-details.model';

@Component({
  selector: 'app-tv-info',
  templateUrl: './tv-info.component.html',
  styleUrls: ['./tv-info.component.scss']
})
export class TvInfoComponent implements OnInit {

  @Input() tvData: Tv;
  constructor() { }

  getNetworkNames() {
    return this.tvData.networks.map(x => x.name);
  }

  getProductionCompanyNames() {
    return this.tvData.production_companies.map(x => x.name);
  }

  ngOnInit(): void {
  }

}
