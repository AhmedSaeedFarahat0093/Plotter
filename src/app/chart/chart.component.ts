import { Component, Input } from '@angular/core';
import { ChartComponentObject } from '../shared/models/chartComponentObject.model';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent  {
 @Input() chartObject: ChartComponentObject[] = new Array<ChartComponentObject>(1);
  view: any[] = [950, 400];
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };
  constructor() {
    Object.assign(this, this.chartObject );
  }

}
