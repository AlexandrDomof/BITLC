import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmListmodeComponent } from './lm-listmode.component';

describe('LmListmodeComponent', () => {
  let component: LmListmodeComponent;
  let fixture: ComponentFixture<LmListmodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmListmodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LmListmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
