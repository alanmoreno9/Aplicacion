import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConductoresactivosPage } from './conductoresactivos.page';

describe('ConductoresactivosPage', () => {
  let component: ConductoresactivosPage;
  let fixture: ComponentFixture<ConductoresactivosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConductoresactivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
