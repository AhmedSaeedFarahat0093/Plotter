import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  } from 'events';
import { errorMessage, retryMessage } from '../shared/defines';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
   errorMessage: string;
   retryMessage: string;
   @Output() retryAction: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.errorMessage = errorMessage;
    this.retryMessage = retryMessage;
  }
  retry(): void {
    this.retryAction.emit();
  }

}
