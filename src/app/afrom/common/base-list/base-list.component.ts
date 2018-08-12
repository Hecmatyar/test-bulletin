import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-base-list',
  templateUrl: 'base-list.component.html',
  styleUrls: ['base-list.component.less'],
})

export class BaseListComponent implements OnInit {
  @Input() title: string;
  @Input() isMapping = false;
  @Output() addItem = new EventEmitter<any>();
  @Output() changeItemsPerPage = new EventEmitter<any>();
  @Output() clearFiler = new EventEmitter<any>();
  @Output() toggleColumnVisible = new EventEmitter<any>();
  @Output() mapping = new EventEmitter<any>();
  @Output() marking = new EventEmitter<any>();
  itemsPerPage = [10, 20, 50];
  constructor() {
  }

  ngOnInit() {
  }
  addItemList() {
    this.addItem.emit();
  }
  clearFilterList() {
    this.clearFiler.emit();
  }
  toggleColumnVisibleList() {
    this.toggleColumnVisible.emit();
  }
  changeItemsPerPageList(value) {
    this.changeItemsPerPage.emit(value);
  }
  mappingSelected() {
    this.mapping.emit();
  }
  markAsImpossible() {
    this.marking.emit();
  }
}
