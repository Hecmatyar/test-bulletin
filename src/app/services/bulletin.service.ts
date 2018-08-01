import { Injectable } from '@angular/core';
import { Bulletin } from '../entities/bulletin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Filter} from '../entities/filter';

const httpOptions = {
  headers: new HttpHeaders()
};
httpOptions.headers.append('Content-Type', 'application/json');
httpOptions.headers.append('Accept', 'application/json');

@Injectable({ providedIn: 'root' })
export class BulletinService {
  constructor(private http: HttpClient) {}
  private bulletins: Bulletin[] = [];

  private asyncResult: any;
  private bulletinsUrl = 'http://ci2.dextechnology.com:8000/api/Bulletin/GetByFilters';

  getBulletins (filter: Filter): Observable<Bulletin[]> {
    this.http.post<any>(this.bulletinsUrl, filter, httpOptions).toPromise()
    // return this.asyncResult.then(a => { console.log(a); });
      .then((data: any) => {
        console.log('promise data', data);
        return data.bulletins;
      }).catch((data: any ) => {console.log('error', data); });
  }
}
