import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: 'select.component.html',
  styleUrls:[ 'select.component.scss' ]
})

export class SelectComponent implements OnInit {
  @Input() items: any[];
  @Output() changeSelected = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit() {
  }
  change(value: any) {
    this.changeSelected.emit(value);
  }
}
