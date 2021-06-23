import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { mockReceipt } from 'src/app/mocks/MockReceipt';
import { MockReceiptService } from 'src/app/mocks/MockReceiptService';
import { ReceiptService } from 'src/app/services/receipt.service';

import { MainviewComponent } from './mainview.component';

describe('MainviewComponent', () => {
  let component: MainviewComponent;
  let fixture: ComponentFixture<MainviewComponent>;
  let receiptService: ReceiptService;
  let debugElement:DebugElement;

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
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a receipt after taking input', ()=>{
    const spy = spyOn(receiptService, 'parse').withArgs('').and.returnValue(of(mockReceipt));
    component.postReceipt();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(component.receipt).toBe(mockReceipt);
  });

  it('should render the receipt image after taking input', ()=>{
    const spy = spyOn(receiptService, 'parse').withArgs('').and.returnValue(of(mockReceipt));
    component.postReceipt();
    fixture.detectChanges();

    let receipt = debugElement.queryAll(By.css('receipt'));
    expect(receipt.length).toBeGreaterThan(0);
  });
});
