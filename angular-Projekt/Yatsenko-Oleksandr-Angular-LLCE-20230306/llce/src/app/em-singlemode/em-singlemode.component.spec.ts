import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmSinglemodeComponent } from './em-singlemode.component';

describe('EmSinglemodeComponent', () => {
  let component: EmSinglemodeComponent;
  let fixture: ComponentFixture<EmSinglemodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmSinglemodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmSinglemodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
