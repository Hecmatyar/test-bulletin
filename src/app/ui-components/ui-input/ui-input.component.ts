import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup, FormControl} from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UiInputComponent),
  multi: true
};

const noop = () => {};

@Component({
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
  selector: 'app-ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: [ './ui-input.component.less' ]
})
export class UiInputComponent  implements ControlValueAccessor {
  @Input() required = false;
  @Input() parentFormGroup = new FormGroup(
    {'default': new FormControl( '', [] )});
  @Input() controlName = 'default';
  private innerValue: any = '';
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
