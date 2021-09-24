import { Component, OnInit } from '@angular/core';
import { columnsHeader } from '../shared/defines';
import { Columns } from '../shared/models/columns.model';
import { DimensionColumnsService } from '../shared/services/dimensionColumns/dimension-columns-service.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  copyArrayItem
} from "@angular/cdk/drag-drop";
import { FunctionsEnum } from '../shared/enums/columnFunction.enum';
import { ChartsService } from '../shared/services/charts/charts.service';
import { ChartPostObject } from '../shared/models/chart-postObject.model';
import { ChartComponentObject } from '../shared/models/chartComponentObject.model';

@Component({
  selector: 'app-data-source',
  templateUrl: './data-source.component.html',
  styleUrls: ['./data-source.component.scss']
})
export class DataSourceComponent implements OnInit {
  header: string;
  items: Columns[];
  columsLoadingMode: boolean;
  apiFailled: boolean;
  destination: Columns[] = new Array<Columns>(2);
  chartObject: ChartComponentObject[] = new Array<ChartComponentObject>(1);
  chartLoading: boolean = false;
  count  = 5;
  constructor(private columnService: DimensionColumnsService,
    private chartService: ChartsService) { }

  ngOnInit() {
    this.header = columnsHeader;
    this.apiFailled = false;
    this.setcolumnsAndChart();

  }
  setcolumnsAndChart(): void {
    this.columsLoadingMode = true;
    this.apiFailled = true;
    this.columnService.getDimensionColumns().subscribe((res: Columns[]) => {
      this.columsLoadingMode = false;
      this.apiFailled = false;
      this.items = [...res];
      this.setChartParams(this.items);
      this.getChartData();
    }, () => {
      this.columsLoadingMode = false;
      this.apiFailled = true;
    });
  }

  setChartParams(Columns: Columns[]): void {
    this.destination = [
      {
        name: Columns.find(item => item.function === FunctionsEnum.dimension).name,
        function: FunctionsEnum.dimension
      },
      {
        name: Columns.find(item => item.function === FunctionsEnum.measure).name,
        function: FunctionsEnum.measure
      },
    ];
  }


  drop(event: CdkDragDrop<string[]>) {
    if (this.destination.length < 2) {
      let item: any = event.previousContainer.data[event.previousIndex];
      let copy: any = JSON.parse(JSON.stringify(item));
      let element: any = {};
      for (let attr in copy) {
        element[attr] = copy[attr];
      }
      // add the dimension item in the first index to appear the top and pervent to add to two dimension items
      if (element.function === FunctionsEnum.dimension && this.destination.findIndex(item => item.function === FunctionsEnum.dimension) === -1) {
        this.destination.splice(0, 0, element);
      }
      // add the mesures item in the second index to appear the bootom and pervent to add to two mesures items
      else if (element.function === FunctionsEnum.measure && this.destination.findIndex(item => item.function === FunctionsEnum.measure) === -1) {
        this.destination.splice(1, 0, element);
      }
      else {
        alert("You should have only one messure and one dimension")
      }

      if (this.destination.length === 2) {
        this.getChartData();
      }

    }
  }
  clear(index: number): void {
    this.destination.splice(index, 1);
  }
  getChartData(): void {
    this.chartLoading = true;
    const postobject: ChartPostObject = new ChartPostObject();
    postobject.dimension = this.destination[0].name;
    postobject.measures = new Array<string>(1);
    postobject.measures[0] = this.destination[1].name;
    this.chartService.getChart(postobject).subscribe(res => {
    this.chartLoading = false;
      this.chartObject = [...res];
    });
  }

}
