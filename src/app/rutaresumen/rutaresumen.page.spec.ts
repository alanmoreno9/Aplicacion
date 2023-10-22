import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutaresumenPage } from './rutaresumen.page';

describe('RutaresumenPage', () => {
  let component: RutaresumenPage;
  let fixture: ComponentFixture<RutaresumenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RutaresumenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
