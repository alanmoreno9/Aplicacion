import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncaminoPage } from './encamino.page';

describe('EncaminoPage', () => {
  let component: EncaminoPage;
  let fixture: ComponentFixture<EncaminoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EncaminoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
