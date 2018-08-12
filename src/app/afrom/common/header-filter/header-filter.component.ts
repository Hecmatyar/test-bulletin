import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header-filter',
  templateUrl: 'header-filter.component.html',
  styleUrls: ['header-filter.component.less']
})

export class HeaderFilterComponent implements OnInit {
  @Input() name: string;
  @Input() text: string;
  @Input() useFilter = false;
  @Output() filterChanged = new EventEmitter<any>();
  @Output() openFilter = new EventEmitter<any>();
  isDesc = false;
  constructor() {
  }

  ngOnInit() {
  }
  setDesc() {
    this.isDesc = !this.isDesc;
    this.updateFilter();
  }
  updateFilter() {
    console.log('filter');
    this.filterChanged.emit({name: this.name, desc: this.isDesc});
  }
  openFilterWindow(event) {
    console.log('window');
    event.stopPropagation();
    this.openFilter.emit();
  }
}
