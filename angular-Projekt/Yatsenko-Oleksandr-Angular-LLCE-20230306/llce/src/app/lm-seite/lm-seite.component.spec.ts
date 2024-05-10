import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmSeiteComponent } from './lm-seite.component';

describe('LmSeiteComponent', () => {
  let component: LmSeiteComponent;
  let fixture: ComponentFixture<LmSeiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmSeiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LmSeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
