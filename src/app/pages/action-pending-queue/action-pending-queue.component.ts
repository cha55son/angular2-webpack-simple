import { Component, OnInit } from '@angular/core';

import { AppState } from 'app/app.service';

import template from './action-pending-queue.component.html';
import style from './action-pending-queue.component.scss';

@Component({
  selector: 'action-pending-queue',
  providers: [],
  styles: [style],
  template,
})
export class ActionPendingQueueComponent implements OnInit {
  private localState = { value: '' }; // Type is inferred by the default value. i.e. localState: { value: string };
  private title = 'Action Pending Queue'; // Type is inferred by the default value. i.e. title: string

  // constructor(public appState: AppState, ...) { ... }
  //
  // is equivalent to the following:
  //
  // public appState: AppState;
  // constructor(appState: AppState, ...) {
  //   this.appState = appState;
  //   ...
  // }
  constructor(public appState: AppState) { }

  public ngOnInit() {
    console.log(`Hello '${this.title}' component loaded!`);
  }
}
