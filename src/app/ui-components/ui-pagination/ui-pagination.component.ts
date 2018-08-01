import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-pagination',
  templateUrl: './ui-pagination.component.html',
  styleUrls: [ './ui-pagination.component.less' ]
})
export class UiPaginationComponent {
  @Input() totalItems = 164;
  @Input() maxSize = 8;
  @Input() itemsPerPage = 10;
  page: number;
  pageChanged(event: any): void {
    this.page = event.page;
  }
}
