import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterconductorPage } from './registerconductor.page';

describe('RegisterconductorPage', () => {
  let component: RegisterconductorPage;
  let fixture: ComponentFixture<RegisterconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
