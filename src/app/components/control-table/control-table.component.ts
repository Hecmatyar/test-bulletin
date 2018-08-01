import { Component, OnInit, ViewChild, TemplateRef, Output, EventEmitter, Input } from '@angular/core';
import {User} from '../../entities/user';
import {Select} from '../../entities/select';
import {Guid} from 'guid-typescript';
import {Filter} from '../../entities/filter';

@Component({
  selector: 'app-control-table',
  templateUrl: './control-table.component.html',
  styleUrls: [ './control-table.component.less' ]
})
export class ControlTableComponent implements OnInit {
  private userList: any[];
  @Input() filter: Filter;
  get users(): User[] {
    return this.users;
  }
  @Input()
  set users(users: User[]) {
    this.userList = users.map(item => new Select(item.id, item.name));
  }
  @Output() onOpenEdit = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();
  constructor(  ) {}
  selectItemsPerPage = [new Select(5, 5), new Select(10, 10), new Select(15, 15)];

  ngOnInit() {
    console.log('');
  }
  openEditWindow() {
    this.onOpenEdit.emit();
  }
  selectUser(userId: Guid) {
    const newFilter = this.filter;
    newFilter.userId = userId;
    this.onUpdate.emit(newFilter);
  }
  selectDate(newDate: Date, start: boolean) {
    const newFilter = this.filter;
    start ? newFilter.startDate = newDate : newFilter.endDate = newDate;
    this.onUpdate.emit(newFilter);
  }
  search(searchText: string) {
    const newFilter = this.filter;
    newFilter.searchText = searchText;
    this.onUpdate.emit(newFilter);
  }
  changeItemsPerPage(items: number) {
    const newFilter = this.filter;
    newFilter.pageFilter.pageSize = items;
    this.onUpdate.emit(newFilter);
  }
}
