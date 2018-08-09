import {Injectable} from '@angular/core';
import {Http, RequestOptionsArgs} from '@angular/http';
import {BaseRequest} from './BaseRequest.service';
import {Bulletin} from '../entities/bulletin';
import {Filter} from '../entities/filter';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DeprApiRequest extends BaseRequest {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  // Get(request: Filter, config?: RequestOptionsArgs): Promise<Bulletin> {
  //   const body = new FormData();
  //   body.append('request',  JSON.stringify(request));
  //   return this.fetch(
  //     `/api/Bulletin/GetByFilters`,
  //     Object.assign({ method : 'POST', body, headers: null, }, config))
  //     .then((response) => response.json())
  //     .catch(BaseRequest.handleError);
  // }
}
