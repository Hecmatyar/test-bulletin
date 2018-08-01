import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui-search',
  templateUrl: './ui-search.component.html',
  styleUrls: [ './ui-search.component.less' ]
})
export class UiSearchComponent {
  value: string;
  @Output() onSearch = new EventEmitter<string>();
  search() {
    this.onSearch.emit(this.value);
  }
}
