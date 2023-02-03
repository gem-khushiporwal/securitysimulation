import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCsvModalComponent } from './download-csv-modal.component';

describe('DownloadCsvModalComponent', () => {
  let component: DownloadCsvModalComponent;
  let fixture: ComponentFixture<DownloadCsvModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadCsvModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadCsvModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
