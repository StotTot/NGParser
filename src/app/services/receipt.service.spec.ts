import { TestBed } from '@angular/core/testing';

import { ReceiptService } from './receipt.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import {mockReceipt} from '../mocks/MockReceipt'
describe('ReceiptService', () => {
  let service: ReceiptService;
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
    
      imports: [HttpClientTestingModule],
    
      providers: [ReceiptService]
    
    });
    
    service = TestBed.inject(ReceiptService);
    mockHttp = TestBed.inject(HttpTestingController);
 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a receipt object', (done: DoneFn)=>{
    
    service.parse('fakeUrl').subscribe((receipt)=>{
      expect(receipt).toBe(mockReceipt);
      expect(receipt.url).toBe(mockReceipt.url);
      done();
    });

    const req = mockHttp.expectOne('http://localhost:8080/parse');
    expect(req.request.method).toBe('POST');
    
    req.flush(mockReceipt);
    mockHttp.verify();
  
  });
});
