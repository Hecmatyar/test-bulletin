import { Component, OnInit, ViewChild } from '@angular/core';
import {EditBulletinComponent} from '../../components/edit-bulletin/edit-bulletin.component';
import {Filter} from '../../entities/filter';
import {BulletinService} from '../../services/bulletin.service';
import {Bulletin} from '../../entities/bulletin';
import {User} from '../../entities/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.less' ]
})
export class MainComponent implements OnInit {
  @ViewChild('editBulletin') private editBulletin: EditBulletinComponent;
  constructor( private bulletinService: BulletinService ) {}
  filter: Filter = new Filter;
  bulletins: Bulletin[] = [];
  users: User[] = [];
  editableBulletin: Bulletin;
  ngOnInit() {
    this.filter.pageFilter.pageSize = 5;
    this.getBulletins();
    // get users
    this.users = [new User({id: '22345200-abe8-4f60-90c8-0d43c5f6c0f6', name: 'Петрович' }),
      new User({id: '22345200-abe8-4f60-90c8-1d43c5f6c0f6', name: 'Иванович' }),
      new User({id: '27345200-abe8-4f60-90c8-0d43c5f6c0f6', name: 'Федорович' })];
  }
  update(event) {
    console.log('filter', event);
    // заново загрузить все данные с фильтром
  }
  getBulletins() {
    const result = this.bulletinService.getBulletins(this.filter);
  }
  getUsers() {

  }
  openEditWindow(bulletin: any) {
    console.log(bulletin)
    this.editBulletin.open(bulletin);
  }
}
