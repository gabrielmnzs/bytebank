import { TransferService } from './../service/transfer.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Transfer } from '../models/transfer.model';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {

  @Output() whenSend = new EventEmitter<any>();

  value: number;
  destiny: number;

  constructor(private service: TransferService) { }

  send() {
    console.log("Nova transferência solicitada");

    const valueEmitter: Transfer = { value: this.value, destiny: this.destiny };

    this.service.add(valueEmitter).subscribe(
      (result) => {
        this.clearFields();
      },
      (error) => console.log(error)
    );

    this.clearFields();
  }

  clearFields(){
    this.value = 0;
    this.destiny = 0;
  }
}
