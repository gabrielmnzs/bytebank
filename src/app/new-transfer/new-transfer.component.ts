import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {

  @Output() whenSend = new EventEmitter<any>();

  value: number;
  destiny: number;

  send() {
    console.log("Nova transferência solicitada");

    const valueEmitter = { value: this.value, destiny: this.destiny };
    this.whenSend.emit(valueEmitter);

    this.clearFields();
  }

  clearFields(){
    this.value = 0;
    this.destiny = 0;
  }
}
