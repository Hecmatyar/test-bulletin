export class SortParamDto {
  fieldName: string | null;
  isDesc: boolean | null;
  constructor(_fieldName: string, _isDesc: boolean) {
    this.fieldName = _fieldName;
    this.isDesc = _isDesc;
  }
}
