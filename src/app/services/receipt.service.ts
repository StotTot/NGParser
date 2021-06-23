import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receipt } from '../models/receipt';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(private http:HttpClient) { }

  // async parse(url:string):Promise<Receipt> {
  //   try {
  //     const r = await this.http.post<Receipt>(`http://localhost:8080/parse`, url).toPromise();
  //     return r;
  //   } catch(e : any) {
  //     alert("No bueno")
  //   }
  //   return null as any;
  // }

  parse(url:string):Observable<Receipt> {
    let headers = new HttpHeaders(
    {
      'Content-type':'plain/text'
    })
    return this.http.request('POST', 'http://localhost:8080/parse', 
      {
        headers:headers,
        body:url,
        responseType:'json',
      })
 
  }
}
