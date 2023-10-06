import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebitoPage } from './debito.page';

describe('DebitoPage', () => {
  let component: DebitoPage;
  let fixture: ComponentFixture<DebitoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DebitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
