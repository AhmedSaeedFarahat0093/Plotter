import { ChartComponentConfig } from './chartconfig.model';

export class  ChartComponentObject {
    name: string;
    series: Series[];
    config?: ChartComponentConfig;
    constructor() {
        this.config = new ChartComponentConfig();
    }
}

export class Series {
   name: string;
   value: number;
}
