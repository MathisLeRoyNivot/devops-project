import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsPage } from './alerts.page';

describe('AlertsComponent', () => {
  let component: AlertsPage;
  let fixture: ComponentFixture<AlertsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
