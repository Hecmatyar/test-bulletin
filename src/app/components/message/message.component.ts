import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {ModalWindowComponent} from '../modal-window/modal-window.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: [ './message.component.less' ]
})
export class MessageComponent {
  text: string;
  title: string;
  @ViewChild('modal') private modal: ModalWindowComponent;
  constructor(  ) {}
  showMessageSuccess(text: string) {
    this.text = text;
    this.title = 'Success';
    this.modal.openModal();
  }
  showMessageEror(text: string) {
    this.text = text;
    this.title = 'Error';
    this.modal.openModal();
  }
}
