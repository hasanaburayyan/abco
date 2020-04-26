import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceOrder } from './place-order';

describe('ContactUsComponent', () => {
  let component: PlaceOrder;
  let fixture: ComponentFixture<PlaceOrder>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceOrder ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
