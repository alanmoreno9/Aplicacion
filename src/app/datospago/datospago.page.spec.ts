import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatospagoPage } from './datospago.page';

describe('DatospagoPage', () => {
  let component: DatospagoPage;
  let fixture: ComponentFixture<DatospagoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatospagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
