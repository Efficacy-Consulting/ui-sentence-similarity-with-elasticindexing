import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartIndexComponent } from './start-index.component';

describe('StartIndexComponent', () => {
  let component: StartIndexComponent;
  let fixture: ComponentFixture<StartIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
