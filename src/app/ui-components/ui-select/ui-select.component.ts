import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Select} from '../../entities/select';

@Component({
  selector: 'app-ui-select',
  templateUrl: './ui-select.component.html',
  styleUrls: [ './ui-select.component.less' ]
})
export class UiSelectComponent {
  @Input() options: Select[];
  @Input() haveAll = false;
  @Input() parentFormGroup = new FormGroup(
    {'default': new FormControl( '', [] )});
  @Input() controlName = 'default';
  @Output() onSelect = new EventEmitter<any>();
  changeSelect(value: any) {
    this.onSelect.emit(value);
  }
}
