import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValorizacionesPage } from './valorizaciones.page';

describe('ValorizacionesPage', () => {
  let component: ValorizacionesPage;
  let fixture: ComponentFixture<ValorizacionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ValorizacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
