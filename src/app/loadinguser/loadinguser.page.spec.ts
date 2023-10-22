import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadinguserPage } from './loadinguser.page';

describe('LoadinguserPage', () => {
  let component: LoadinguserPage;
  let fixture: ComponentFixture<LoadinguserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoadinguserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
