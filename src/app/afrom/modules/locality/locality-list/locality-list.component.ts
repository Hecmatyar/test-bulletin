import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-locality-list',
  templateUrl: 'locality-list.component.html',
  styleUrls: ['locality-list.component.less', '../../../assets/scss/table.scss']
})

export class LocalityListComponent implements OnInit {
  counter: Array<number> = new Array(12);
  constructor() {
  }

  ngOnInit() {
  }
  addItem() {
    // todo:релирект на страницу добавления
  }
  changeItemsPerPage(value) {
    // todo:обновить данные
  }
  clearFilter() {
    // todo:очистить фильтр
  }
  toggleColumnVisible() {
    // todo:вызвать окно отображаемых колонок
  }
}
