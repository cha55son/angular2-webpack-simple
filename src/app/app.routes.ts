import { Routes, RouterModule } from '@angular/router';
import { AnalystQueueModule } from './pages/analyst-queue';
import { ActionPendingQueueComponent } from './pages/action-pending-queue';
import { AboutComponent } from './pages/about';
import { NoContentComponent } from './pages/no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'analyst-queue', pathMatch: 'full' },
  { path: 'action-pending-queue', component: ActionPendingQueueComponent },
  { path: 'about',         component: AboutComponent },
  // { path: 'detail', loadChildren: './+detail#DetailModule'},
  // { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',            component: NoContentComponent },
];
