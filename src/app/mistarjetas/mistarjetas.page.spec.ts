import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MistarjetasPage } from './mistarjetas.page';

describe('MistarjetasPage', () => {
  let component: MistarjetasPage;
  let fixture: ComponentFixture<MistarjetasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MistarjetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
