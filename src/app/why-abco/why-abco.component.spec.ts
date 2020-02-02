import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAbcoComponent } from './why-abco.component';

describe('WhyAbcoComponent', () => {
  let component: WhyAbcoComponent;
  let fixture: ComponentFixture<WhyAbcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyAbcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyAbcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
