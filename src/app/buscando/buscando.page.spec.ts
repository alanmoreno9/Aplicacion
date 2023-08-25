import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscandoPage } from './buscando.page';

describe('BuscandoPage', () => {
  let component: BuscandoPage;
  let fixture: ComponentFixture<BuscandoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BuscandoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
