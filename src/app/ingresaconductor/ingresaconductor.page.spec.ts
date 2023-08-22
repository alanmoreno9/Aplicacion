import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresaconductorPage } from './ingresaconductor.page';

describe('IngresaconductorPage', () => {
  let component: IngresaconductorPage;
  let fixture: ComponentFixture<IngresaconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IngresaconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
