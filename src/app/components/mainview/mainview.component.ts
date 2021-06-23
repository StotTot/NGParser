import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Receipt } from 'src/app/models/receipt';
import { ReceiptService } from 'src/app/services/receipt.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'total', 'taxes', 'date'];
  inputUrl:string = '';
  receipt?:Receipt;
  receipts:Receipt[] = [];
  dataSource:any
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  constructor(private receiptService:ReceiptService) { }

  ngOnInit(): void {
    this.getReceipts;
  }

  postReceipt(){
    this.receiptService.parse(this.inputUrl).subscribe((data)=>{
      this.receipt = data;
      console.log(data);
    });
  }

  getReceipts(){
    this.receiptService.getAll().subscribe((data)=>{
      this.receipts = data;
      this.dataSource = new MatTableDataSource(this.receipts)
      this.dataSource.sort = this.sort;
      console.log(data);
    })
  }

}
