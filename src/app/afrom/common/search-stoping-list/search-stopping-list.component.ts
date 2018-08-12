import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-stopping-list',
  templateUrl: './search-stopping-list.component.html',
  styleUrls: ['./search-stopping-list.component.less']
})

export class SearchStoppingListComponent implements OnInit {
  counter: Array<number> = new Array(4);
  selectedStopping: Array<string> = [];
  constructor() {
  }

  ngOnInit() {
  }
  selectStopping(value: string) {
    this.selectedStopping.push(value);
  }
}
