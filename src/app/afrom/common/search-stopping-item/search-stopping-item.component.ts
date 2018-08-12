import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-stopping-item',
  templateUrl: './search-stopping-item.component.html',
  styleUrls: ['./search-stopping-item.component.less']
})

export class SearchStoppingItemComponent implements OnInit {
  @Input() name: string;
  @Input() id: string;
  @Input() description: string;
  @Input() index: number;
  @Output() selectStopping = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit() {
  }
  selectItem() {
    this.selectStopping.emit(this.id);
  }
}
