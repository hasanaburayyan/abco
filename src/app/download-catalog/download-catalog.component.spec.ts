import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCatalogComponent } from './download-catalog.component';

describe('DownloadCatalogComponent', () => {
  let component: DownloadCatalogComponent;
  let fixture: ComponentFixture<DownloadCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
