import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: [ './pagination.component.less' ]
})
export class PaginationComponent {
  @Input() totalItems = 164;
  @Input() maxSize = 8;
  @Input() itemsPerPage = 10;
  @Output() pageChanged = new EventEmitter<any>();
  page: number;
  changed(event: any): void {
    this.page = event.page;
    this.pageChanged.emit(this.page);
  }
}
