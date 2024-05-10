import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmErgebnisseComponent } from './em-ergebnisse.component';

describe('EmErgebnisseComponent', () => {
  let component: EmErgebnisseComponent;
  let fixture: ComponentFixture<EmErgebnisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmErgebnisseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmErgebnisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
