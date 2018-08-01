import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: [ './modal-window.component.less' ]
})
export class ModalWindowComponent {
  @Input() windowSize = 'modal-md';
  @Input() title = 'Modal window';
  modalRef: BsModalRef;
  @ViewChild('modal') private modal: TemplateRef<any>;
  constructor(private modalService: BsModalService) {}
  openModal() {
    this.modalRef = this.modalService.show(this.modal, { class: this.windowSize });
  }
  closeModal() {
    this.modalRef.hide();
  }
}
