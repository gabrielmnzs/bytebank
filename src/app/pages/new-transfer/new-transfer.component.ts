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

  value: number;
  destiny: number;

  constructor(private service: TransferService, private router: Router) { }

  send() {
    console.log("Nova transferência solicitada");

    const valueEmitter: Transfer = { value: this.value, destiny: this.destiny };

    this.service.add(valueEmitter).subscribe(
      (result) => {
        this.clearFields();
        this.router.navigateByUrl('extract');
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
