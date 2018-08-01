import {Guid} from 'guid-typescript';
import {Paged} from './paged';
import {SortParamDto} from './sortParamDto';

export class Filter {
  pageFilter: Paged | null;
  sortParams: [SortParamDto] | null;
  userId: Guid | null;
  searchText: string | null;
  rating: number | null;
  startDate: Date | null;
  endDate: Date | null;
  constructor() {
    this.pageFilter = new Paged(1, 10);
    this.sortParams = [new SortParamDto('', false)];
  }
}
