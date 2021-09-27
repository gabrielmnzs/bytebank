import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transfers: any[] = [];

  send($event) {
    const transfers = {...$event, date: new Date()};
    this.transfers.push(transfers);
  }
}
