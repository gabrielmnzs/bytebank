import { TransferService } from './../../service/transfer.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Transfer } from '../../models/transfer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {

  @Output() whenSend = new EventEmitter<any>();

  value: string;
  destiny: string;

  constructor(private service: TransferService, private router: Router) { }

  send() {
    console.log("Nova transferência solicitada");

    const valueEmitter: Transfer = { value: this.currencyToNumber(this.value), destiny: this.destiny };
    console.log(valueEmitter);
    this.service.add(valueEmitter).subscribe(
      (result) => {
        this.clearFields();
        this.router.navigateByUrl('extract');
      },
      (error) => console.log(error)
    );

    this.clearFields();
  }

  currencyToNumber(value: string) {
    var match = value.match(/[0-9,.]*/);

    if(match !== null) {
      return parseFloat(match[0].replace(/[.]/g, '').replace(/,/g, '.'));
    }
  }

  clearFields() {
    this.value = '';
    this.destiny = '';
  }
}
