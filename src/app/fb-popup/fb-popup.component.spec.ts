import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbPopupComponent } from './fb-popup.component';

describe('FbPopupComponent', () => {
  let component: FbPopupComponent;
  let fixture: ComponentFixture<FbPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
