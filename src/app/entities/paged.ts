export class Paged {
  page: number;
  pageSize: number;
  constructor(_page: number, _pageSize: number) {
    this.page = _page || 1;
    this.pageSize = _pageSize || 10;
  }
}
