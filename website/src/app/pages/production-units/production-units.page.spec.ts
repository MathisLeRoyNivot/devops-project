import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionUnitsPage } from './production-units.page';

describe('ProductionUnitsComponent', () => {
  let component: ProductionUnitsPage;
  let fixture: ComponentFixture<ProductionUnitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionUnitsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionUnitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
