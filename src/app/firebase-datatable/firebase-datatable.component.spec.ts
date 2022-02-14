import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseDatatableComponent } from './firebase-datatable.component';

describe('FirebaseDatatableComponent', () => {
  let component: FirebaseDatatableComponent;
  let fixture: ComponentFixture<FirebaseDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebaseDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
