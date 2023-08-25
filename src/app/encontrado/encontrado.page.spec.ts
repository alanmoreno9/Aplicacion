import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncontradoPage } from './encontrado.page';

describe('EncontradoPage', () => {
  let component: EncontradoPage;
  let fixture: ComponentFixture<EncontradoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EncontradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
