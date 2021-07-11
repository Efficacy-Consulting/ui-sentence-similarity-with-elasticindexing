import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedDocumentComponent } from './expanded-document.component';

describe('ExpandedDocumentComponent', () => {
  let component: ExpandedDocumentComponent;
  let fixture: ComponentFixture<ExpandedDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandedDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandedDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
