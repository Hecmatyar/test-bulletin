import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: [ './ui-button.component.less' ]
})
export class UiButtonComponent {
  constructor() {}
  @Input() typeBtn = 'btn-primary';
  @Input() textBtn = 'text';
  @Input() disabled = false;
}
