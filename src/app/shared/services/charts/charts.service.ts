import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ChartPostObject } from '../../models/chart-postObject.model';
import { ChartComponentObject, Series } from '../../models/chartComponentObject.model';
import { ChartDataService } from './chart-data.service';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private chartDataService: ChartDataService) { }
  getChart(postObject: ChartPostObject) {
    return this.chartDataService.getChart(postObject).pipe(map(res => {
       if (res && res.length > 0) {
         const index = 0;
         const chartComponentObject: ChartComponentObject[] = new Array<ChartComponentObject>(res.lenth);
         chartComponentObject[index] = new ChartComponentObject();
         chartComponentObject[index].series = new Array<Series>();
         chartComponentObject[index].name = res[0].name;
         for (let i = 0 ; i < res[index].values.length; i++) {
         chartComponentObject[index].series[i] = new Series();
         chartComponentObject[index].series[i].name = res[index].values[i];
         chartComponentObject[index].series[i].value = res[index + 1].values[i];
         }

         chartComponentObject[index].config.xAxisLabel = res[index].name;
         chartComponentObject[index].config.yAxisLabel = res[index + 1].name;
         return chartComponentObject;
       }


    }));
  }
}

