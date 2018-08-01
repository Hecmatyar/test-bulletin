import {Component, OnInit, ViewChild, TemplateRef, Input} from '@angular/core';
import {ModalWindowComponent} from '../modal-window/modal-window.component';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import {Bulletin} from '../../entities/bulletin';
import {User} from '../../entities/user';
import {Select} from '../../entities/select';

@Component({
  selector: 'app-edit-bulletin',
  templateUrl: './edit-bulletin.component.html',
  styleUrls: [ './edit-bulletin.component.less' ]
})
export class EditBulletinComponent {
  @ViewChild('template') private template: TemplateRef<any>;
  @ViewChild('modal') private modal: ModalWindowComponent;
  private userList: any[];
  get users(): User[] {
    return this.users;
  }
  @Input()
  set users(users: User[]) {
    this.userList = users.map(item => new Select(item.id, item.name));
  }
  constructor(  ) {}
  bulletin = new Bulletin({});
  isEdit = true;

  bulletinForm: FormGroup = new FormGroup({
    'number': new FormControl( this.bulletin.number, [Validators.required, Validators.pattern('[1-9]{1,}[0-9]{1,}')] ),
    'createdUtc': new FormControl(this.bulletin.createdUtc || new Date(), [ Validators.required]),
    'userId' : new FormControl(this.bulletin.userId, [ Validators.required]),
    'text' : new FormControl(this.bulletin.content, [ Validators.required]),
    'rating' : new FormControl(this.bulletin.rating, [ Validators.required, Validators.pattern('[1-9]{1}0?')])
  });
  open(bulletin: any) {
    this.isEdit = !!bulletin;
    this.bulletin = this.isEdit ? bulletin : new Bulletin({});
    this.modal.openModal();
  }
  close() {
    this.modal.closeModal();
  }
  save() {
    console.log(this.bulletinForm.value);
  }
}
