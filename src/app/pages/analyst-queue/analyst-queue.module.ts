import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BusyModule } from 'angular2-busy';
import { AnalystQueueComponent } from './components/analyst-queue';

const routes = [
  {
    path: 'analyst-queue', children: [
      { path: '', component: AnalystQueueComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AnalystQueueComponent,
  ],
  imports: [
    CommonModule,
    BusyModule,
    RouterModule.forChild(routes),
  ],
})
export class AnalystQueueModule {
  public static routes = routes;
}
