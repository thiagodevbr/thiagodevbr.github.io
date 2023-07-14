import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() public modalText: string = '';
  @Output() public choice: EventEmitter<any> = new EventEmitter();

  public choiceModal(event: 'y' | 'n') {
    this.choice.emit(event);
  }
}
