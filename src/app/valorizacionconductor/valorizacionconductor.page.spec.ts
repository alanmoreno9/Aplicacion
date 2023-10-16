import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValorizacionconductorPage } from './valorizacionconductor.page';

describe('ValorizacionconductorPage', () => {
  let component: ValorizacionconductorPage;
  let fixture: ComponentFixture<ValorizacionconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ValorizacionconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
