import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserencaminoPage } from './userencamino.page';

describe('UserencaminoPage', () => {
  let component: UserencaminoPage;
  let fixture: ComponentFixture<UserencaminoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserencaminoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
