import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmSeiteComponent } from './cm-seite.component';

describe('CmSeiteComponent', () => {
  let component: CmSeiteComponent;
  let fixture: ComponentFixture<CmSeiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmSeiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmSeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
