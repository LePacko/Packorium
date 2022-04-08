import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTerrariumComponent } from './form_terrarium.component';

describe('FormTerrariumComponent', () => {
  let component: FormTerrariumComponent;
  let fixture: ComponentFixture<FormTerrariumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTerrariumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTerrariumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
