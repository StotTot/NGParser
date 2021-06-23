import { Component, OnInit } from '@angular/core';
import { Receipt } from 'src/app/models/receipt';
import { ReceiptService } from 'src/app/services/receipt.service';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {
  receipt?:Receipt;
  constructor(private receiptService:ReceiptService) { }

  ngOnInit(): void {
  }

  postReceipt(){
    this.receiptService.parse('https://images.sampletemplates.com/wp-content/uploads/2018/04/Detailed-Grocery-Payment-Receipt-Samples.jpg').subscribe((data)=>{
      this.receipt = data;
      console.log(data);
    });
  }

}
