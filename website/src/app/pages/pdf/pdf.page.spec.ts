import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPage } from './pdf.page';

describe('PdfComponent', () => {
  let component: PdfPage;
  let fixture: ComponentFixture<PdfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
