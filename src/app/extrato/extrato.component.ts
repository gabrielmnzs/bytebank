import { TransferService } from './../service/transfer.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transfers: any[];

  constructor(private service: TransferService) { }

  ngOnInit() {
    this.transfers = this.service.transfers;
  }
}
