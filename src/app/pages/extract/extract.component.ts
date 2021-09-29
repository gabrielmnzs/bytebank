import { TransferService } from './../../service/transfer.service';
import { Component, OnInit } from '@angular/core';
import { Transfer } from '../../models/transfer.model';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss']
})
export class ExtractComponent implements OnInit {
  transfers: any[];

  constructor(private service: TransferService) { }

  ngOnInit() {
    this.service.all().subscribe((transfers: Transfer[]) => {
      this.transfers = transfers;
    })
  }
}
