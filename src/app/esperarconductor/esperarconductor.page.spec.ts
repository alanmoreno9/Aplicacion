import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EsperarconductorPage } from './esperarconductor.page';

describe('EsperarconductorPage', () => {
  let component: EsperarconductorPage;
  let fixture: ComponentFixture<EsperarconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EsperarconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
