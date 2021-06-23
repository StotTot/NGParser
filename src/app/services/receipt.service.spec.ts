import { TestBed } from '@angular/core/testing';

import { ReceiptService } from './receipt.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
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

  beforeEach(()=>{
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
