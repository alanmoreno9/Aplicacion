import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagoqrPage } from './pagoqr.page';

describe('PagoqrPage', () => {
  let component: PagoqrPage;
  let fixture: ComponentFixture<PagoqrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagoqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
