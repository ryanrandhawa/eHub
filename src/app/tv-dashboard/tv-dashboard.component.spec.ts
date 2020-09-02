import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvDashboardComponent } from './tv-dashboard.component';

describe('TvDashboardComponent', () => {
  let component: TvDashboardComponent;
  let fixture: ComponentFixture<TvDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
