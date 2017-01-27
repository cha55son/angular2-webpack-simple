import {
  Component,
  OnInit
} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AppState } from 'app/app.service';

import { Title } from '../title';
import template from './analyst-queue.component.html';
import style from './analyst-queue.component.scss';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'analyst-queue',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  styles: [style],
  template,
})
export class AnalystQueueComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  public loadingData: Promise<any>;
  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public title: Title,
    private http: Http,
  ) {}

  public ngOnInit() {
    console.log('hello `Analyst Queue` component');
    // this.loadingData = this.http.get('http://example.com').toPromise();
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
