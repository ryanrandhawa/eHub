import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvPosterComponent } from './tv-details/tv-poster/tv-poster.component';
import { TvInfoComponent } from './tv-details/tv-info/tv-info.component';
import { TvSeasonComponent } from './tv-details/tv-season/tv-season.component';
import { TvEpisodeComponent } from './tv-details/tv-season/tv-episode/tv-episode.component';
import { TvDashboardComponent } from './tv-dashboard/tv-dashboard.component';
import { PosterHoverDirective } from './directives/poster-hover.directive';
import { SortArrayPipe } from './pipes/sort-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TvDetailsComponent,
    TvPosterComponent,
    TvInfoComponent,
    TvSeasonComponent,
    TvEpisodeComponent,
    TvDashboardComponent,
    PosterHoverDirective,
    SortArrayPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
