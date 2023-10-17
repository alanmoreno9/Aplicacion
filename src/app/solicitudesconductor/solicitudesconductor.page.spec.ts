import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitudesconductorPage } from './solicitudesconductor.page';

describe('SolicitudesconductorPage', () => {
  let component: SolicitudesconductorPage;
  let fixture: ComponentFixture<SolicitudesconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SolicitudesconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
