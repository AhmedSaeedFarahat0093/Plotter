import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../../ApisUrl';
import { ChartPostObject } from '../../models/chart-postObject.model';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor(private http: HttpClient) { }
  getChart(postObj: ChartPostObject): Observable<any> {
    const url = API_URLS.chart;
    const body: ChartPostObject = postObj;
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    const options: any = {
      headers
    };
    return this.http.post(url, body, options);
  }
}
