import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from '../../ApisUrl';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Columns } from '../../models/columns.model';


@Injectable({
  providedIn: 'root'
})
export class DimensionColumnsDataService {

  constructor(private http: HttpClient ) { }
  getDimensionColumns(): Observable<any> {
    const url = API_URLS.getDimensionColumns;
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    const options: any = {
      headers
    };
    return this.http.get<Columns[]>(url, options);
  }
}
