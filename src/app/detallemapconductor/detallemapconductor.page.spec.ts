import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallemapconductorPage } from './detallemapconductor.page';

describe('DetallemapconductorPage', () => {
  let component: DetallemapconductorPage;
  let fixture: ComponentFixture<DetallemapconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallemapconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
