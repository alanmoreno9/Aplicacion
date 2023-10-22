import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeticiondetallePage } from './peticiondetalle.page';

describe('PeticiondetallePage', () => {
  let component: PeticiondetallePage;
  let fixture: ComponentFixture<PeticiondetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PeticiondetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
