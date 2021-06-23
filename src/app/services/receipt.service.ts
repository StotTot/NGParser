import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Receipt } from '../models/receipt';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(private http:HttpClient) { }

  async parse(url:string):Promise<Receipt> {
    try {
      const r = await this.http.post<Receipt>(`http://localhost:8080/parse`, url).toPromise();
      return r;
    } catch(e : any) {
      alert("No bueno")
    }
    return null as any;
  }
}
