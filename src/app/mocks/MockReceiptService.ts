import { EMPTY, Observable, of } from "rxjs";
import { Receipt } from '../models/receipt'

export class MockReceiptService {


    parse():Observable<Receipt>{
        return EMPTY;
    }
}