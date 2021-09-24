import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Columns } from '../../models/columns.model';
import { DimensionColumnsDataService } from './dimension-columns-data.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DimensionColumnsService {

  constructor(private dataService: DimensionColumnsDataService) { }
  getDimensionColumns(): Observable<Columns[]> {
    return this.dataService.getDimensionColumns().pipe(map((res: Columns[]) => {
      const columns: Columns[] = new Array<Columns>();
      res.forEach((item) => {
        const column = new Columns();
        column.name = item.name;
        column.function = item.function;
        columns.push(column);
      });
      return columns;
    }));
  }
}
