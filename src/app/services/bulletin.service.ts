import { Injectable } from '@angular/core';
import { Bulletin } from '../entities/bulletin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Filter} from '../entities/filter';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Accept': 'application/json'})
};
// httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');

@Injectable({ providedIn: 'root' })
export class BulletinService {
  constructor(private http: HttpClient) {}
  private bulletins: Bulletin[] = [];

  private asyncResult: any;
  private bulletinsUrl = 'http://ci2.dextechnology.com:8000/api/Bulletin/GetByFilters';

  // async getBulletins (filter: Filter): Promise<Bulletin[]> {
  //   const asyncResponse = await this.http.post<any>(this.bulletinsUrl, filter, httpOptions);
  //   // return this.asyncResponse;
  // }

  getBulletins (filter: Filter): Observable<any> {
    return this.http.post<any>(this.bulletinsUrl, filter, httpOptions).pipe(
      tap(_ => console.log('data', _))
    );
  }
}
