import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockReceiptService } from 'src/app/mocks/MockReceiptService';
import { ReceiptService } from 'src/app/services/receipt.service';

import { MainviewComponent } from './mainview.component';

describe('MainviewComponent', () => {
  let component: MainviewComponent;
  let fixture: ComponentFixture<MainviewComponent>;
  let receiptService: ReceiptService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainviewComponent ],
      providers:[{provide: ReceiptService, useClass: MockReceiptService}]
    })
    .compileComponents();
    receiptService = TestBed.inject(ReceiptService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
