import { Component, Input, OnInit } from '@angular/core';
import { Receipt } from 'src/app/models/receipt';
import { ReceiptService } from 'src/app/services/receipt.service';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {
  
  inputUrl:string = '';
  receipt?:Receipt;
  constructor(private receiptService:ReceiptService) { }

  ngOnInit(): void {
  }

  postReceipt(){
    this.receiptService.parse(this.inputUrl).subscribe((data)=>{
      this.receipt = data;
      console.log(data);
    });
  }

}
