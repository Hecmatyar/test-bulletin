import { Component, Input } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-ui-textarea',
  templateUrl: './ui-textarea.component.html',
  styleUrls: [ './ui-textarea.component.less' ]
})
export class UiTextareaComponent {
  text: string;
  @Input() parentFormGroup = new FormGroup(
    {'default': new FormControl( '', [] )});
  @Input() controlName = 'default';
}
