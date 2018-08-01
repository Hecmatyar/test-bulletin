import {Component, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ui-number',
  templateUrl: './ui-number.component.html',
  styleUrls: [ './ui-number.component.less' ]
})
export class UiNumberComponent {
  @Input() maxValue = 0;
  @Input() minValue = 10;
  @Input() parentFormGroup = new FormGroup(
    {'default': new FormControl( '', [] )});
  @Input() controlName = 'default';
  value: string;
}
