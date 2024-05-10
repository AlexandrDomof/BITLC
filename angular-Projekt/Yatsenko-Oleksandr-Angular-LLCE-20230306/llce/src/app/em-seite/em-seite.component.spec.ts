import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmSeiteComponent } from './em-seite.component';

describe('EmSeiteComponent', () => {
  let component: EmSeiteComponent;
  let fixture: ComponentFixture<EmSeiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmSeiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmSeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
