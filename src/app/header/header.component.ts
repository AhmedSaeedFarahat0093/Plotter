import { Component, OnInit } from '@angular/core';
import { homeLabel, title } from '../shared/defines';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string;
  home: string;
  constructor() { }

  ngOnInit() {
  this.title = title;
  this.home = homeLabel;
  }

}
