import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Bulletin} from '../../entities/bulletin';
import {Filter} from '../../entities/filter';

@Component({
  selector: 'app-bulletin-table',
  templateUrl: './bulletin-table.component.html',
  styleUrls: [ './bulletin-table.component.less' ]
})
export class BulletinTableComponent {
  @Input() filter: Filter;
  @Input() bulletins: Bulletin[] = [];
  @Output() onOpenEdit = new EventEmitter<any>();
  @Output() onChangeSort = new EventEmitter<any>();
  constructor( ) {}
  selectedBulletin: Bulletin;
  sortType = 'number';
  sortReverse = false;
  setSort(type: string) {
    this.sortType = type;
    this.sortReverse = !this.sortReverse;
    // this.bulletins.sort((a, b): any => {
    //   return this.sortReverse ? a[this.sortType].toString().localeCompare(b[this.sortType].toString()) :
    //   b[this.sortType].toString().localeCompare(a[this.sortType].toString());
    // });
    this.onChangeSort.emit({fieldName: this.sortType, isDesc: this.sortReverse});
  }
  selectBulletin(bulletin: Bulletin) {
    this.selectedBulletin = bulletin;
  }
  editBulletin(bulletin: Bulletin) {
    this.onOpenEdit.emit(bulletin);
  }
}
