import {Injectable} from '@angular/core';
import {Http, RequestOptionsArgs, Response} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export abstract class BaseRequest {

  static handleError = (error: any): Promise<any> => {
    return Promise.reject(error.message || error);
  }

  constructor(protected http: HttpClient) {
  }

  // fetch(url: string, config: RequestOptionsArgs): Promise<Response> {
  //   return this.http.request('POST', url, Object.assign({
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     }
  //   }, config)).toPromise();
  // }
}
