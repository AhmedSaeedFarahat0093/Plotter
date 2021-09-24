import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataSourceComponent } from './data-source/data-source.component';
import { LoadingComponent } from './loading/loading.component';
import { ErrorComponent } from './error/error.component';
import { ChartComponent } from './chart/chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataSourceComponent,
    LoadingComponent,
    ErrorComponent,
    ChartComponent,
     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxChartsModule,
    DragDropModule,
    NgxSkeletonLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
