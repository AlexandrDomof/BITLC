import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmSinglemodeComponent } from './lm-singlemode.component';

describe('LmSinglemodeComponent', () => {
  let component: LmSinglemodeComponent;
  let fixture: ComponentFixture<LmSinglemodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmSinglemodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LmSinglemodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
