import { Transfer } from './../models/transfer.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private transferList: any[];
  private url = 'http://localhost:3000/transfers';

  constructor(private httpClient: HttpClient) {
    this.transferList = [];
  }

  get transfers() {
    return this.transferList;
  }

  all(): Observable<Transfer[]> {
    return this.httpClient.get<Transfer[]>(this.url);
  }

  add(transfer: Transfer): Observable<Transfer> {
    this.hydrate(transfer);

    return this.httpClient.post<Transfer>(this.url, transfer);
  }

  hydrate(transfer: any) {
    transfer.date = new Date();
  }
}
