import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingoffPage } from './loadingoff.page';

describe('LoadingoffPage', () => {
  let component: LoadingoffPage;
  let fixture: ComponentFixture<LoadingoffPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoadingoffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
