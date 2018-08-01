import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-ui-datepicker',
  templateUrl: './ui-datepicker.component.html',
  styleUrls: [ './ui-datepicker.component.less' ]
})
export class UiDatepickerComponent {
  @Input() parentFormGroup = new FormGroup(
    {'default': new FormControl( '', [] )});
  @Input() controlName = 'default';
  @Output() onSelect = new EventEmitter<any>();
  bsValue;
  value: any;
  onChange() {
    if(this.value) this.onSelect.emit(this.value);
  }
}
